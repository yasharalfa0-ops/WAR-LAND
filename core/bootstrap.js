// WAR LAND - browser bootstrap for the first playable integration test.
function WARLAND_BOOT(){
  const state=createIntegratedGame();
  state.paused=false;
  emitGameEvent(state,{type:'world',title:'WAR LAND آغاز شد',message:'جهان بازی آماده است.',data:{mode:state.mode}});
  return state;
}
if(typeof window!=='undefined')window.WARLAND_BOOT=WARLAND_BOOT;
