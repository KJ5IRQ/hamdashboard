// Top bar text
const topBarCenterText = `KJ5IRQ - EM02wt`;

// Grid layout configuration (4 columns, 3 rows)
var layout_cols = 4;
var layout_rows = 3;

// Menu items configuration structure: [color code, menu text, target link, scale factor, side (optional)]
const aURL = [
  // Left side slide-out menus
  ["add10d", "Back", "#", "1"],
  ["ff9100", "Refresh", "#", "1"],
  ["2196F3", "GMRS Query", "https://gmrs.app", "1.0"],
  ["2196F3", "Launches", "https://www.spacelaunchschedule.com/category/fl", "1.0"],
  ["2196F3", "Forecast", "https://forecast.weather.gov/MapClick.php?lat=32.8084&lon=-98.1069", "1.0"],
  ["2196F3", "Forecast Graphs", "https://forecast.weather.gov/MapClick.php?lat=32.8203&lon=-98.0783&lg=english&&FcstType=graphical&menu=1", "1.5"],
  ["FF000F", "Wx Alerts", "https://alerts.weather.gov/search?point=32.7877,-98.0812", "1.3"],
  ["FF000F", "Rivers & Lakes", "https://water.noaa.gov/#@=-98.1199677,32.7780536,8.8286183&b=topographic&g=obsFcst,1!1!1!1!1!1!1!1!1!1!1!1!1!1!1!0!0!0!0!0,0.5,1!1!1!1!0,0,0&ab=0,0,#D94B4A,1,1,1,#cccccc,1,0,0,#B243B1,1,0,0,#98E09A,1&a=hydrologic,0.35&s=0,0,0.9,0.9&n=false,#72afe9,0.9,0,0.9,0,0.9&p=false,0.75,0,7,0,1,2025,1,4,0&d=0,0,1,1,1,1,1,1","#006EFF,1,1,1"],
  ["FF000F", "NWS SAFER", "https://www.arcgis.com/apps/MapSeries/index.html?appid=ea8b0eeb2e9c45b790329c0ed2fdc225", "1"],
  ["FF000F", "NWS Southern Region Headquarters", "https://www.weather.gov/srh/", "1"],
  ["2196F3", "Wind", "https://www.ventusky.com/?p=32.88;-97.62;8&l=wind-10m&t=20250105/0300", "1"],
  ["2196F3", "Rain Fall", "https://maps.cocorahs.org/?maptype=precip&datetype=daily&center=28.3893,-80.6088", "1"],

  // Right side slide-out menus
  ["2196F3", "ISS Passes", "https://www.heavens-above.com/PassSummary.aspx?satid=25544&lat=28.3893&lng=-80.6088&loc=Cape_Canaveral&alt=0&tz=UCT", "1.0", "R"],
  ["2196F3", "ISS Status", "https://www.ariss.org/current-status-of-iss-stations.html", "1.0", "R"],
  ["2196F3", "Lightning", "https://map.blitzortung.org/#6.65/32.74/-97.559", "1", "R"],
  ["2196F3", "DX Cluster", "https://dxcluster.ha8tks.hu/map/", "1", "R"],
  ["2196F3", "Contest", "https://www.contestcalendar.com/fivewkcal.html", "1", "R"],
  ["2196F3", "POTA", "https://pota.app", "1", "R"],
  ["2196F3", "WinLink", "https://cms.winlink.org:444/maps/propagation.aspx", "1.0", "R"],
  ["2196F3", "Band Plan", "https://kd4atw.org/wp-content/uploads/2012/05/band_plan.png", "1.2", "R"],
];

// Dashboard items configuration structure: [Title, Image Source URL, Optional Links]
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  ["FWD LOCAL RADAR", "https://radar.weather.gov/ridge/standard/KFWS_loop.gif"],
  ["Tropical Outlook", "https://www.nhc.noaa.gov/xgtwo/two_atl_0d0.png", "https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png", "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png", "https://www.cpc.ncep.noaa.gov/products/precip/CWlink/ghaz/gth_full_TConly_ATL.png"],
  ["ISS POSITION", "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=300&height=300&satid=25544", "iframe|https://heavens-above.com/PassSummary.aspx?satid=25544", "https://heavens-above.com/StarLink.aspx"],
  ["Wx Widget", "iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=8864613&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit"],
  ["Forecast Graphics", "https://data.mesonet.org/data/public/noaa/metar/maps/realtime/latest.tair.png", "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=rh&n=3", "https://data.mesonet.org/data/public/noaa/metar/maps/realtime/latest.tapp.png", "https://graphical.weather.gov/images/conus/MaxT1_conus.png", "https://graphical.weather.gov/images/conus/MinT1_conus.png", "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=pop12", "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=windspd&n=3", "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=windgust&n=3", "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=sky&n=3"],
  ["FIRE DANGER", "..."]
  // Add additional rows as needed
];

// Function to generate menu items dynamically
function generateMenu(aURL) {
  const menuContainer = document.getElementById('menu-container');
  aURL.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.style.backgroundColor = item[0];
    menuItem.innerHTML = `
      <a href="${item[2]}" target="_blank" style="transform: scale(${item[3]});">
        ${item[1]}
      </a>
    `;
    if (item[4]) {
      menuItem.classList.add(item[4]);
    }
    menuContainer.appendChild(menuItem);
  });
}

// Function to generate dashboard items dynamically
function generateDashboard(aIMG) {
  const dashboardContainer = document.getElementById('dashboard-container');
  aIMG.forEach(item => {
    const dashboardItem = document.createElement('div');
    dashboardItem.classList.add('dashboard-item');
    dashboardItem.innerHTML = `
      <h3>${item[0]}</h3>
      <img src="${item[1]}" alt="${item[0]}">
      ${item.slice(2).map(link => `<a href="${link}" target="_blank">${link}</a>`).join('')}
    `;
    dashboardContainer.appendChild(dashboardItem);
  });
}

// Initialize the page
function init() {
  generateMenu(aURL);
  generateDashboard(aIMG);
}

// Run initialization on page load
window.onload = init;
