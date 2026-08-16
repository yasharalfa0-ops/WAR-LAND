const WARLAND_DATA = {
  startDate: { year: 1939, month: 9, day: 1 },
  resources: ['money', 'oil', 'steel', 'coal', 'aluminum'],
  countries: {
    germany: { name: 'آلمان', capital: 'برلین', money: 100, oil: 60, steel: 120, coal: 200, aluminum: 50 },
    poland: { name: 'لهستان', capital: 'ورشو', money: 45, oil: 10, steel: 30, coal: 40, aluminum: 8 },
    france: { name: 'فرانسه', capital: 'پاریس', money: 90, oil: 25, steel: 100, coal: 80, aluminum: 35 },
    uk: { name: 'بریتانیا', capital: 'لندن', money: 110, oil: 70, steel: 120, coal: 160, aluminum: 55 },
    ussr: { name: 'شوروی', capital: 'مسکو', money: 100, oil: 130, steel: 180, coal: 240, aluminum: 45 }
  },
  units: {
    infantry: { name: 'پیاده‌نظام', manpower: 1000, attack: 10, defense: 12, speed: 2 },
    motorized: { name: 'موتوری', manpower: 900, attack: 13, defense: 10, speed: 4 },
    lightTank: { name: 'تانک سبک', manpower: 300, attack: 18, defense: 12, speed: 5 },
    mediumTank: { name: 'تانک متوسط', manpower: 400, attack: 28, defense: 25, speed: 4 },
    artillery: { name: 'توپخانه', manpower: 250, attack: 24, defense: 8, speed: 2 }
  }
};
