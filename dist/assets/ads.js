(()=>{
  'use strict';
  const config=window.NOTATION_ADS;
  const validPublisher=!!config&&/^ca-pub-\d{16}$/.test(config.publisherId);
  const adScriptSelector='script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]';
  function ensureAdSenseTag(){
    if(!validPublisher)return null;
    let existing=document.querySelector(adScriptSelector);
    if(existing)return existing;
    let script=document.createElement('script');
    script.async=true;
    script.crossOrigin='anonymous';
    script.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+encodeURIComponent(config.publisherId);
    document.head.append(script);
    return script;
  }
  const adSenseTag=ensureAdSenseTag();
  if(!config||!config.enabled||!config.certifiedCmpConfigured||!validPublisher||!/^\d+$/.test(config.slotId))return;
  let scriptLoaded=false,unitsPushed=new WeakSet(),cmpListenerBound=false,cmpAttempts=0;
  function boxes(){
    return Array.prototype.slice.call(document.querySelectorAll('[data-ad-container="true"]'));
  }
  function visibleBox(box){
    if(!box)return false;
    if(typeof box.closest==='function'&&box.closest('[hidden],.hidden'))return false;
    if(typeof box.getClientRects==='function'&&!box.getClientRects().length)return false;
    return true;
  }
  function consentAllows(tc){
    if(!tc)return false;
    if(tc.gdprApplies===false)return true;
    let purpose=tc.purpose&&tc.purpose.consents, vendor=tc.vendor&&tc.vendor.consents;
    return tc.gdprApplies===true&&purpose&&purpose[1]===true&&vendor&&vendor[755]===true;
  }
  function populate(){
    boxes().forEach(box=>{
      if(!visibleBox(box))return;
      let unit=box.querySelector('ins.adsbygoogle');
      if(!unit)return;
      unit.dataset.adClient=config.publisherId;
      unit.dataset.adSlot=config.slotId;
      box.hidden=false;
      if(!unitsPushed.has(unit)){
        unitsPushed.add(unit);
        (window.adsbygoogle=window.adsbygoogle||[]).push({});
      }
    });
  }
  function load(){
    if(scriptLoaded){populate();return;}
    scriptLoaded=true;
    let script=document.querySelector(adScriptSelector)||adSenseTag;
    if(script){
      if(window.adsbygoogle)populate();
      else script.addEventListener('load',populate,{once:true});
      return;
    }
    populate();
  }
  window.NotationLabAdsRefresh=function(){if(scriptLoaded)populate()};
  function bindCmp(){
    if(cmpListenerBound||cmpAttempts++>120)return;
    if(typeof window.__tcfapi!=='function'){
      window.setTimeout(bindCmp,250);
      return;
    }
    cmpListenerBound=true;
    window.__tcfapi('addEventListener',2,(tc,ok)=>{if(ok&&consentAllows(tc))load()});
  }
  if(adSenseTag)adSenseTag.addEventListener('load',bindCmp,{once:true});
  bindCmp();
})();
