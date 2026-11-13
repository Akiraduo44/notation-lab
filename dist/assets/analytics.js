(function () {
  "use strict";

  var endpoint = "https://oddcantus-stay-weird-qr.xboxliveakira.chatgpt.site/api/track";
  var consentKey = "notation-lab-analytics-consent";
  var sessionKey = "notation-lab-analytics-session";
  var startedAt = Date.now();
  var sentStart = false;

  function id() {
    var value = sessionStorage.getItem(sessionKey);
    if (!value) {
      value = (window.crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + "-" + Math.random().toString(36).slice(2));
      sessionStorage.setItem(sessionKey, value);
    }
    return value;
  }

  function viewport() {
    var width = window.innerWidth || 0;
    return width < 600 ? "small" : width < 1000 ? "medium" : "large";
  }

  function host(value) {
    try { return value ? new URL(value).hostname : null; } catch (_) { return null; }
  }

  function send(event, data) {
    if (localStorage.getItem(consentKey) !== "granted") return;
    var payload = {
      site: "notation-lab",
      sessionId: id(),
      event: event,
      path: location.pathname,
      label: data && data.label ? String(data.label).slice(0, 120) : undefined,
      durationMs: data && typeof data.durationMs === "number" ? Math.round(data.durationMs) : undefined,
      referrerHost: host(document.referrer),
      viewportBucket: viewport()
    };
    var body = JSON.stringify(payload);
    try {
      if (navigator.sendBeacon) {
        var accepted = navigator.sendBeacon(endpoint, new Blob([body], { type: "text/plain;charset=UTF-8" }));
        if (accepted) return;
      }
      fetch(endpoint, { method: "POST", body: body, headers: { "Content-Type": "text/plain;charset=UTF-8" }, keepalive: true, mode: "cors" }).catch(function () {});
    } catch (_) {}
  }

  function begin() {
    if (sentStart) return;
    sentStart = true;
    send("session_start");
    send("page_view");
    setTimeout(function () { send("heartbeat", { durationMs: Date.now() - startedAt }); }, 15000);
    setInterval(function () { send("heartbeat", { durationMs: Date.now() - startedAt }); }, 30000);
    window.addEventListener("pagehide", function () { send("page_exit", { durationMs: Date.now() - startedAt }); });
    observeSections();
  }

  function observeSections() {
    if (window.IntersectionObserver) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) send("section_view", { label: entry.target.id || entry.target.getAttribute("data-analytics") || entry.target.tagName.toLowerCase() });
        });
      }, { threshold: 0.35 });
      document.querySelectorAll("section[id], [data-analytics-section]").forEach(function (element) { observer.observe(element); });
    }
    document.addEventListener("click", function (event) {
      var target = event.target && event.target.closest ? event.target.closest("a,button,[role=button]") : null;
      if (!target) return;
      var label = target.getAttribute("data-analytics") || target.getAttribute("aria-label") || target.getAttribute("data-tab") || target.textContent || target.getAttribute("href") || target.id;
      if (label) send("click", { label: String(label).replace(/\s+/g, " ").trim().slice(0, 120) });
    }, true);
  }

  function showConsent() {
    if (localStorage.getItem(consentKey)) return;
    var banner = document.createElement("aside");
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Analytics choice");
    banner.style.cssText = "position:fixed;z-index:9999;left:16px;right:16px;bottom:16px;max-width:620px;padding:16px 18px;background:#101a2d;color:#e9eef8;border:1px solid #40506b;border-radius:14px;box-shadow:0 12px 35px rgba(0,0,0,.35);font:14px/1.5 system-ui,sans-serif";
    banner.innerHTML = "<strong>Anonymous usage measurement</strong><p style='margin:7px 0 12px;color:#b8c5dc'>Allow Notation Lab to measure visits, time on pages, sections viewed and labelled clicks. No account, raw IP or typed practice data is stored.</p><div style='display:flex;gap:8px;flex-wrap:wrap'><button data-choice='grant' style='cursor:pointer;border:1px solid #8990ff;background:#6c74f8;color:#fff;border-radius:9px;padding:8px 12px'>Allow analytics</button><button data-choice='deny' style='cursor:pointer;border:1px solid #40506b;background:#1b2942;color:#f2f6ff;border-radius:9px;padding:8px 12px'>No thanks</button><a href='/privacy/' style='color:#b8c5dc;padding:8px 2px'>Privacy details</a></div>";
    document.body.appendChild(banner);
    banner.addEventListener("click", function (event) {
      var choice = event.target && event.target.getAttribute("data-choice");
      if (!choice) return;
      localStorage.setItem(consentKey, choice === "grant" ? "granted" : "denied");
      banner.remove();
      if (choice === "grant") begin();
    });
  }

  function init() {
    if (localStorage.getItem(consentKey) === "granted") begin();
    else showConsent();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}());
