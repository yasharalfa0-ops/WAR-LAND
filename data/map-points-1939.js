// WAR LAND - visible strategic map points for the 1939 start.
// Only oil production/refining infrastructure is permanently visible on the map.
// Other infrastructure stays hidden until the relevant map layer is selected.
const MAP_POINTS_1939 = {
  cityTiers: {
    weak: { min: 2, max: 3 },
    medium: { min: 3, max: 5 },
    strong: { min: 5, max: 7 }
  },
  oil: {
    land: [
      { name: 'باکو', country: 'USSR', type: 'oil_field' },
      { name: 'گروزنی', country: 'USSR', type: 'oil_field' },
      { name: 'مائیکوپ', country: 'USSR', type: 'oil_field' },
      { name: 'کرچوک', country: 'Iraq', type: 'oil_field' },
      { name: 'کرکوک', country: 'Iraq', type: 'refinery' },
      { name: 'آبادان', country: 'Iran', type: 'refinery' },
      { name: 'دِه‌وین', country: 'Romania', type: 'oil_field' },
      { name: 'پلوئشتی', country: 'Romania', type: 'refinery' },
      { name: 'تگزاس', country: 'USA', type: 'oil_field' },
      { name: 'کالیفرنیا', country: 'USA', type: 'oil_field' },
      { name: 'آلبرتا', country: 'Canada', type: 'oil_field' },
      { name: 'زاپوپان', country: 'Mexico', type: 'oil_field' }
    ],
    water: [
      { name: 'خلیج فارس', country: 'international_waters', type: 'offshore_oil' },
      { name: 'خلیج مکزیک', country: 'international_waters', type: 'offshore_oil' },
      { name: 'دریای خزر', country: 'international_waters', type: 'offshore_oil' }
    ]
  }
};
