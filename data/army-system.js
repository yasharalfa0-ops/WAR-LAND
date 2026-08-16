// WAR LAND - map-movable army system.
const ARMY_SYSTEM = {
  unitTypes: {
    infantry: { name:'پیاده‌نظام', speed:2, attack:10, defense:12 },
    motorized: { name:'موتوری', speed:4, attack:13, defense:10 },
    lightTank: { name:'تانک سبک', speed:5, attack:18, defense:12 },
    mediumTank: { name:'تانک متوسط', speed:4, attack:28, defense:25 },
    artillery: { name:'توپخانه', speed:2, attack:24, defense:8 },
    antiTank: { name:'ضدتانک', speed:2, attack:20, defense:9 },
    antiAir: { name:'ضدهوایی', speed:2, attack:12, defense:14 },
    specialForces: { name:'نیروهای ویژه', speed:3, attack:16, defense:13 }
  },
  createArmy(id, name, countryId, location) {
    return { id, name, countryId, location, destination:null, path:[], status:'idle', organization:100, morale:70, supply:100, experience:0, units:{}, commanderId:null };
  },
  addUnit(army, type, amount) {
    if (!this.unitTypes[type]) return false;
    army.units[type] = (army.units[type] || 0) + Math.max(0, amount);
    return true;
  },
  setDestination(army, destination, path) {
    army.destination = destination;
    army.path = Array.isArray(path) ? path.slice() : [];
    army.status = army.path.length ? 'moving' : 'idle';
  },
  moveOneStep(army) {
    if (army.status !== 'moving' || army.path.length === 0) { army.status='idle'; return army.location; }
    army.location = army.path.shift();
    if (army.path.length === 0) { army.destination=null; army.status='idle'; }
    army.supply = Math.max(0, army.supply - 1);
    return army.location;
  },
  combatPower(army) {
    let power=0;
    for (const [type, amount] of Object.entries(army.units)) {
      const unit=this.unitTypes[type];
      if (unit) power += amount * ((unit.attack + unit.defense) / 2);
    }
    return Math.floor(power * (army.organization/100) * (0.5 + army.morale/200));
  }
};
