// WAR LAND - smoke test for the integrated core.
function runWARLANDSmokeTest(){
  const s=createIntegratedGame();
  if(!s || !s.news || !s.events) throw new Error('Game state integration failed');
  const before=s.turn; s.paused=false; tickGame(s);
  if(s.turn!==before+1) throw new Error('Game clock failed');
  emitGameEvent(s,{type:'battle',title:'تست نبرد',message:'رویداد آزمایشی',data:{}});
  if(!s.news.length) throw new Error('News integration failed');
  return {ok:true,turn:s.turn,news:s.news.length};
}
