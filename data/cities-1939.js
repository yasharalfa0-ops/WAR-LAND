// WAR LAND - important cities at the 1 September 1939 start.
// City counts are intentionally compact for mobile performance.
const CITIES_1939 = {
  germany: [
    { id:'berlin', name:'برلین', role:'capital', industry:5 }, { id:'hamburg', name:'هامبورگ', role:'port', industry:4 },
    { id:'munich', name:'مونیخ', role:'industrial', industry:4 }, { id:'ruhr', name:'اسن/روهر', role:'industrial', industry:5 },
    { id:'frankfurt', name:'فرانکفورت', role:'industrial', industry:3 }, { id:'cologne', name:'کلن', role:'industrial', industry:3 }, { id:'bremen', name:'برمن', role:'port', industry:3 }
  ],
  france: [
    { id:'paris', name:'پاریس', role:'capital', industry:5 }, { id:'marseille', name:'مارسی', role:'port', industry:3 },
    { id:'lyon', name:'لیون', role:'industrial', industry:3 }, { id:'lille', name:'لیل', role:'industrial', industry:3 }, { id:'bordeaux', name:'بوردو', role:'port', industry:2 }
  ],
  uk: [
    { id:'london', name:'لندن', role:'capital', industry:5 }, { id:'liverpool', name:'لیورپول', role:'port', industry:4 },
    { id:'manchester', name:'منچستر', role:'industrial', industry:4 }, { id:'birmingham', name:'بیرمنگام', role:'industrial', industry:4 },
    { id:'glasgow', name:'گلاسگو', role:'port', industry:3 }, { id:'cardiff', name:'کاردیف', role:'port', industry:2 }
  ],
  ussr: [
    { id:'moscow', name:'مسکو', role:'capital', industry:5 }, { id:'leningrad', name:'لنینگراد', role:'port', industry:4 },
    { id:'kyiv', name:'کی‌یف', role:'industrial', industry:3 }, { id:'kharkiv', name:'خارکیف', role:'industrial', industry:4 },
    { id:'baku', name:'باکو', role:'oil', industry:4 }, { id:'stalingrad', name:'استالینگراد', role:'industrial', industry:3 }, { id:'vladivostok', name:'ولادی‌وستوک', role:'port', industry:2 }
  ],
  poland: [
    { id:'warsaw', name:'ورشو', role:'capital', industry:3 }, { id:'krakow', name:'کراکوف', role:'industrial', industry:2 }, { id:'lodz', name:'ووچ', role:'industrial', industry:2 }
  ],
  italy: [
    { id:'rome', name:'رم', role:'capital', industry:4 }, { id:'milan', name:'میلان', role:'industrial', industry:4 }, { id:'turin', name:'تورین', role:'industrial', industry:3 },
    { id:'naples', name:'ناپل', role:'port', industry:3 }, { id:'genoa', name:'جنوا', role:'port', industry:3 }
  ],
  japan: [
    { id:'tokyo', name:'توکیو', role:'capital', industry:5 }, { id:'osaka', name:'اوساکا', role:'industrial', industry:4 }, { id:'kyoto', name:'کیوتو', role:'industrial', industry:2 },
    { id:'yokohama', name:'یوکوهاما', role:'port', industry:4 }, { id:'kobe', name:'کوبه', role:'port', industry:3 }, { id:'nagoya', name:'ناگویا', role:'industrial', industry:3 }
  ],
  china: [
    { id:'chongqing', name:'چونگ‌کینگ', role:'capital', industry:3 }, { id:'shanghai', name:'شانگهای', role:'port', industry:4 }, { id:'nanjing', name:'نانجینگ', role:'industrial', industry:3 },
    { id:'wuhan', name:'ووهان', role:'industrial', industry:3 }, { id:'guangzhou', name:'گوانگ‌ژو', role:'port', industry:2 }
  ],
  iran: [
    { id:'tehran', name:'تهران', role:'capital', industry:3 }, { id:'tabriz', name:'تبریز', role:'industrial', industry:2 }, { id:'isfahan', name:'اصفهان', role:'industrial', industry:2 },
    { id:'abadan', name:'آبادان', role:'oil', industry:4 }
  ]
};
