const log=document.getElementById('log');
let game=null;
try{game=typeof WARLAND_BOOT==='function'?WARLAND_BOOT():null;}catch(e){console.error('WAR LAND core boot failed',e);}
if(!game){game={date:{year:1939,month:9,day:1},turn:0,paused:false,economy:{treasury:100},news:[],events:[]};}
function fmtDate(d){return `${d.day} / ${d.month} / ${d.year}`;}
function report(text){if(!log)return;log.insertAdjacentHTML('beforeend',`<p>${text}</p>`);log.scrollTop=log.scrollHeight;}
function syncUI(){const m=document.getElementById('money');if(m)m.textContent=`${game.economy?.treasury??100}M`;const d=document.getElementById('gameDate');if(d)d.textContent=fmtDate(game.date);}
window.addEventListener('warland-map-select',e=>{const d=e.detail;report(`📍 ${d.name} انتخاب شد · ${d.owner||'نقطه استراتژیک'}`);});
const end=document.getElementById('endTurn');
if(end)end.onclick=()=>{game.paused=false;tickGame(game);game.economy=game.economy||{};game.economy.treasury=(game.economy.treasury??100)+5;emitGameEvent(game,{type:'economic',title:'گزارش اقتصادی روزانه',message:'درآمد روزانه کشور ثبت شد.',data:{treasury:game.economy.treasury}});syncUI();report(`📅 ${fmtDate(game.date)} · درآمد روزانه دریافت شد.`);const n=getLatestNews(game,1)[0];if(n)report(`📰 ${n.title}`);};
async function askJessi(question){report('🤖 JESSI در حال تحلیل وضعیت بازی...');try{const r=await fetch('/api/jessi',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question,state:game})});const data=await r.json();if(!r.ok)throw new Error(data.error||'خطای اتصال');report(`🤖 JESSI: ${data.text||'پاسخی دریافت نشد.'}`);}catch(e){report(`⚠️ JESSI آنلاین فعلاً در نسخه GitHub Pages در دسترس نیست. Backend باید جداگانه Deploy شود.`);}}
const j=document.querySelector('.jessi');if(j)j.onclick=()=>{const q=prompt('از JESSI درباره وضعیت کشور، اقتصاد، دیپلماسی یا جنگ بپرس:','وضعیت فعلی کشورم را تحلیل کن');if(q)askJessi(q);};
syncUI();
