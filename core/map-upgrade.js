// WAR LAND Map Upgrade System
// مرحله ارتقای نقشه: مدیریت لایه ها، زوم و اطلاعات کشورها
window.WARLAND_MAP_UPGRADE = {
  zoomLevels: [1, 1.5, 2, 3],
  layers: {
    countries: true,
    cities: true,
    ports: true,
    resources: true,
    defense: true,
    armies: true
  },
  getCountryDetails(name) {
    return (window.MAP_DATA?.countryInfo || {})[name] || {
      capital: 'نامشخص',
      type: 'کشور'
    };
  },
  setLayer(layer, enabled) {
    if (this.layers[layer] !== undefined) this.layers[layer] = enabled;
  }
};
