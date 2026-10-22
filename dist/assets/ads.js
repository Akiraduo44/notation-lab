(()=>{
  'use strict';
  const config=window.NOTATION_ADS;
  if(!config||!config.enabled||!config.certifiedCmpConfigured||!/^ca-pub-\d{16}$/.test(config.publisherId)||!/^\d+$/.test(config.slotId)||typeof window.__tcfapi!=='function')return;
  let scriptLoaded=false,unitsPushed=new WeakSet();
  function boxes(){
    return Array.prototype.slice.call(document.querySelectorAll('[data-ad-container="true"]'));
  }
  function consentAllows(tc){
    if(!tc)return false;
    if(tc.gdprApplies===false)return true;
    let purpose=tc.purpose&&tc.purpose.consents, vendor=tc.vendor&&tc.vendor.consents;
    return tc.gdprApplies===true&&purpose&&purpose[1]===true&&vendor&&vendor[755]===true;
  }
  function populate(){
    boxes().forEach(box=>{
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
    let script=document.createElement('script');
    script.async=true;
    script.crossOrigin='anonymous';
    script.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+encodeURIComponent(config.publisherId);
    script.onload=populate;
    document.head.append(script);
  }
  window.NotationLabAdsRefresh=function(){if(scriptLoaded)populate()};
  window.__tcfapi('addEventListener',2,(tc,ok)=>{if(ok&&consentAllows(tc))load()});
})();
