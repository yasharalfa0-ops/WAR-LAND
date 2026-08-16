// WAR LAND - map-visible strategic assets for the 1939 start.
// These are intentionally separate from the country/city database.
// The map displays these assets as icons; other infrastructure stays in information panels.

const MAP_VISIBLE_ASSETS_1939 = {
  oil: [
    { id: 'baku', type: 'oil_field', name: 'باکو', country: 'اتحاد جماهیر شوروی', location: 'land' },
    { id: 'pahlevi-oil', type: 'oil_field', name: 'میدان نفتی جنوب ایران', country: 'ایران', location: 'land' },
    { id: 'mosul-oil', type: 'oil_field', name: 'موصل', country: 'عراق', location: 'land' },
    { id: 'peles-oil', type: 'oil_field', name: 'پلویشت', country: 'رومانی', location: 'land' },
    { id: 'persian-gulf', type: 'offshore_oil', name: 'منابع نفتی خلیج فارس', country: 'منطقه خلیج فارس', location: 'sea' }
  ],
  refineries: [
    { id: 'abadan', type: 'refinery', name: 'پالایشگاه آبادان', country: 'ایران', location: 'land' },
    { id: 'baku-refinery', type: 'refinery', name: 'پالایشگاه باکو', country: 'اتحاد جماهیر شوروی', location: 'land' },
    { id: 'ploesti-refinery', type: 'refinery', name: 'پالایشگاه‌های پلویشت', country: 'رومانی', location: 'land' }
  ],
  ports: [
    { id: 'hamburg', type: 'port', name: 'هامبورگ', country: 'آلمان' },
    { id: 'rotterdam', type: 'port', name: 'روتردام', country: 'هلند' },
    { id: 'london', type: 'port', name: 'لندن', country: 'بریتانیا' },
    { id: 'liverpool', type: 'port', name: 'لیورپول', country: 'بریتانیا' },
    { id: 'marseille', type: 'port', name: 'مارسی', country: 'فرانسه' },
    { id: 'gibraltar', type: 'port', name: 'جبل‌الطارق', country: 'بریتانیا' },
    { id: 'alexandria', type: 'port', name: 'اسکندریه', country: 'مصر' },
    { id: 'singapore', type: 'port', name: 'سنگاپور', country: 'بریتانیا' },
    { id: 'yokohama', type: 'port', name: 'یوکوهاما', country: 'ژاپن' },
    { id: 'shanghai', type: 'port', name: 'شانگهای', country: 'چین' },
    { id: 'vladivostok', type: 'port', name: 'ولادی‌وستوک', country: 'اتحاد جماهیر شوروی' },
    { id: 'new-york', type: 'port', name: 'نیویورک', country: 'ایالات متحده' }
  ],
  airDefense: [
    { id: 'berlin-aa', type: 'anti_air', name: 'پدافند هوایی برلین', country: 'آلمان', level: 2 },
    { id: 'ruhr-aa', type: 'anti_air', name: 'پدافند هوایی روهر', country: 'آلمان', level: 3 },
    { id: 'london-aa', type: 'anti_air', name: 'پدافند هوایی لندن', country: 'بریتانیا', level: 2 },
    { id: 'paris-aa', type: 'anti_air', name: 'پدافند هوایی پاریس', country: 'فرانسه', level: 1 }
  ],
  coastalDefense: [
    { id: 'gibraltar-coastal', type: 'coastal_defense', name: 'دفاع ساحلی جبل‌الطارق', country: 'بریتانیا', level: 3 },
    { id: 'singapore-coastal', type: 'coastal_defense', name: 'دفاع ساحلی سنگاپور', country: 'بریتانیا', level: 2 },
    { id: 'cherbourg-coastal', type: 'coastal_defense', name: 'دفاع ساحلی شربور', country: 'فرانسه', level: 1 },
    { id: 'yokosuka-coastal', type: 'coastal_defense', name: 'دفاع ساحلی یوکوسوکا', country: 'ژاپن', level: 2 }
  ]
};
