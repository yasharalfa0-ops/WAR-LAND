// WAR LAND - dynamic news engine. News is generated from game-state events.
const WARLAND_NEWS_ENGINE={
 categories:['war','diplomacy','economy','military','politics','world'],
 create(state){return{items:[],max:100};},
 publish(state,category,title,summary,data={}){const item={id:`news-${state.turn}-${Date.now()}`,turn:state.turn,date:{...state.date},category,title,summary,data};state.news=state.news||[];state.news.unshift(item);if(state.news.length>100)state.news.length=100;return item;},
 fromEvent(state,event){if(!event)return null;const map={war:['war','درگیری نظامی جدید','یک تحول نظامی در جهان گزارش شد.'],battle:['military','نبرد','نتایج یک نبرد منتشر شد.'],peace:['diplomacy','پایان جنگ','یک توافق صلح اعلام شد.'],treaty:['diplomacy','پیمان جدید','یک توافق دیپلماتیک به ثبت رسید.'],economic:['economy','تحول اقتصادی','تحول مهمی در اقتصاد یک کشور رخ داد.']};const x=map[event.type]||['world','خبر فوری','تحول جدیدی در جهان رخ داد.'];return this.publish(state,x[0],event.title||x[1],event.message||x[2],event.data||{});},
 latest(state,count=10){return(state.news||[]).slice(0,count);}
};
function connectNewsToGameState(state){state.news=state.news||[];state.newsEngine='WARLAND_NEWS_ENGINE';state.log=state.log||[];return state;}
