(function(){
  const KEY='warland_save_v1';
  const safeClone=o=>{try{return JSON.parse(JSON.stringify(o));}catch(e){return null;}};
  function snapshot(){
    const g=window.game;
    if(!g) return null;
    return {version:1,savedAt:new Date().toISOString(),game:safeClone(g)};
  }
  window.WARLAND_SAVE={
    save(){
      const data=snapshot();
      if(!data) return false;
      localStorage.setItem(KEY,JSON.stringify(data));
      window.dispatchEvent(new CustomEvent('warland-save',{detail:data}));
      return true;
    },
    load(){
      try{
        const raw=localStorage.getItem(KEY); if(!raw) return false;
        const data=JSON.parse(raw); if(!data||!data.game) return false;
        if(window.game){
          Object.assign(window.game,data.game);
          window.dispatchEvent(new CustomEvent('warland-state-restored',{detail:data.game}));
        } else window.__WARLAND_PENDING_SAVE=data.game;
        return true;
      }catch(e){console.error('WAR LAND load failed',e);return false;}
    },
    exists(){return !!localStorage.getItem(KEY)},
    clear(){localStorage.removeItem(KEY)},
    timestamp(){try{const d=JSON.parse(localStorage.getItem(KEY)||'null');return d&&d.savedAt?new Date(d.savedAt):null}catch(e){return null}}
  };
  function wire(){
    const save=document.getElementById('saveGame');
    const load=document.getElementById('loadGame');
    const status=document.getElementById('saveStatus');
    const setStatus=t=>{if(status)status.textContent=t};
    if(save)save.onclick=()=>setStatus(WARLAND_SAVE.save()?'ذخیره شد ✓':'بازی هنوز آماده ذخیره نیست');
    if(load)load.onclick=()=>{const ok=WARLAND_SAVE.load();setStatus(ok?'ذخیره بازی بارگذاری شد ✓':'ذخیره‌ای پیدا نشد');if(ok)document.getElementById('setup')?.classList.add('hidden')};
    const auto=()=>{if(window.game)WARLAND_SAVE.save()};
    window.addEventListener('beforeunload',auto);
    if(WARLAND_SAVE.exists()&&status){const d=WARLAND_SAVE.timestamp();status.textContent=d?'ذخیره موجود: '+d.toLocaleString('fa-IR'):''}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire);else wire();
})();