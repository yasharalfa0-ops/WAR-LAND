// WAR LAND - military doctrines and battle tactics.
const DOCTRINE_SYSTEM = {
  doctrines: {
    mobileWar: { name:'جنگ متحرک', bonuses:{ armor:1.12, speed:1.1, breakthrough:1.15 } },
    defensiveDepth: { name:'دفاع عمقی', bonuses:{ defense:1.15, entrenchment:1.12, counterattack:1.05 } },
    attrition: { name:'جنگ فرسایشی', bonuses:{ defense:1.08, artillery:1.12, organization:1.05 } },
    combinedArms: { name:'تسلیحات ترکیبی', bonuses:{ infantry:1.05, armor:1.08, artillery:1.08, airSupport:1.08 } },
    navalPower: { name:'قدرت دریایی', bonuses:{ navy:1.15, navalStrike:1.12, convoyDefense:1.1 } }
  },
  tactics: {
    assault: { name:'حمله مستقیم', attack:1.08, defense:0.96 },
    armoredBreakthrough: { name:'نفوذ زرهی', armor:1.15, breakthrough:1.18 },
    encirclement: { name:'محاصره', attack:1.12, enemySupply:0.85 },
    defensiveLine: { name:'خط دفاعی', defense:1.15, movement:0.9 },
    counterattack: { name:'ضدحمله', defense:1.05, attack:1.12 },
    amphibious: { name:'آبی-خاکی', navalSupport:1.15, attack:0.95 }
  },
  apply(doctrineId, tacticId) {
    return { doctrine: this.doctrines[doctrineId] || null, tactic: this.tactics[tacticId] || null };
  }
};
