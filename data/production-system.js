// WAR LAND - factories, production lines and equipment stockpile.
const PRODUCTION_SYSTEM = {
  factoryTypes: {
    arms: { name:'کارخانه تسلیحات', output:'rifle' },
    artillery: { name:'کارخانه توپخانه', output:'fieldGun' },
    armor: { name:'کارخانه زرهی', output:'lightTank' },
    aircraft: { name:'کارخانه هواپیماسازی', output:'fighter' },
    naval: { name:'کارخانه کشتی‌سازی', output:'destroyer' }
  },
  createFactory(id,type,cityId,level=1) {
    return { id,type,cityId,level,active:true,assignedEquipment:this.factoryTypes[type]?.output || null,progress:0 };
  },
  daily(factory, stockpile, equipmentId, quantity=1) {
    if (!factory.active || !equipmentId) return 0;
    factory.progress += factory.level;
    if (factory.progress < 10) return 0;
    const produced = Math.floor(factory.progress / 10) * quantity;
    factory.progress %= 10;
    stockpile[equipmentId] = (stockpile[equipmentId] || 0) + produced;
    return produced;
  }
};
