// WAR LAND - browser bootstrap for the first playable integration test.
function WARLAND_BOOT(){
  const state=createIntegratedGame();
  state.paused=false;
  state.territories=state.territories||{};
  const seed=[
    ['berlin','برلین','آلمان',566,205,'urban'],['warsaw','ورشو','لهستان',605,195,'urban'],['paris','پاریس','فرانسه',522,232,'urban'],['london','لندن','بریتانیا',506,188,'urban'],['rome','رم','ایتالیا',566,266,'urban'],['moscow','مسکو','شوروی',692,165,'urban'],['kyiv','کی‌یف','شوروی',650,210,'urban'],['minsk','مینسک','شوروی',640,180,'plain'],['tehran','تهران','ایران',735,270,'urban'],['ankara','آنکارا','ترکیه',650,250,'urban'],['baku','باکو','شوروی',755,250,'oil'],['hamburg','هامبورگ','آلمان',548,170,'port'],['odessa','اودسا','شوروی',655,255,'port'],['toulon','تولون','فرانسه',535,275,'port']
  ];
  seed.forEach(([id,name,owner,x,y,terrain])=>WARLAND_COMBAT.ensureTerritory(state,id,name,owner,x,y,{terrain,radius:34}));
  emitGameEvent(state,{type:'world',title:'WAR LAND آغاز شد',message:'جهان بازی آماده است.',data:{mode:state.mode}});
  return state;
}
if(typeof window!=='undefined')window.WARLAND_BOOT=WARLAND_BOOT;
