const topBarCenterText = `KJ5IRQ - EM02wt`;

// Grid layout
  var layout_cols = 4;
  var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [

//Left side slide out menus

  ["add10d", "Back", "#", "1"],
  ["ff9100", "Refresh", "#", "1"],
  // ["0dd1a7", "Help", "#", "1"],
	
    //["2196F3", "TIME.IS", "https://time.is", "1", "R"],
//  [						// HAMCLOCK
//	"2196F3",					// HAMCLOCK
	//"Ham Clock",				// HAMCLOCK
	//"http://192.168.1.133:8081/live.html",	// HAMCLOCK
	//"1.0",					// HAMCLOCK
  //],						// HAMCLOCK
  [
 	"2196F3",
	"GMRS Query",
	"https://gmrs.app",
	"1.0",
  ],
  [
	"2196F3",
	"Launches",
	"https://www.spacelaunchschedule.com/category/fl",
	"1.0",
  ],
  [
	"2196F3",
	"Forecast",
	"https://forecast.weather.gov/MapClick.php?lat=32.8084&lon=-98.1069",
	"1.0",
  ],
  [
	"2196F3",
	"Forecast Graphs",
	"https://forecast.weather.gov/MapClick.php?lat=32.8203&lon=-98.0783&lg=english&&FcstType=graphical&menu=1",
	"1.5",
  ],
  [
	"FF000F",
	"Wx Alerts",
	"https://alerts.weather.gov/search?point=32.7877,-98.0812", // 
	"1.3",
	// ,FLC009"; - Brevard
 	// ,FLC095"; - Orange
 	// ,FLC117"; - Seminole
  ],
  [
	  "FF000F",
	  "Rivers & Lakes",
	  "https://water.noaa.gov/#@=-98.1199677,32.7780536,8.8286183&b=topographic&g=obsFcst,1!1!1!1!1!1!1!1!1!1!1!1!1!1!1!0!0!0!0!0,0.5,1!1!1!1!0,0,0&ab=0,0,#D94B4A,1,1,1,#cccccc,1,0,0,#B243B1,1,0,0,#98E09A,1&a=hydrologic,0.35&s=0,0,0.9,0.9&n=false,#72afe9,0.9,0,0.9,0,0.9&p=false,0.75,0,7,0,1,2025,1,4,0&d=0,0,1,1,1,1,1,1,#006EFF,1,#006EFF,1,#006EFF,1,#006EFF,1,#006EFF&q="'
	  "1",
  ],
  [
	"FF000F",
	"NWS SAFER",
	"https://www.arcgis.com/apps/MapSeries/index.html?appid=ea8b0eeb2e9c45b790329c0ed2fdc225",
	"1",
  ],
  [
	  "FF000F",
	  "NWS Southern Region Headquarters",
	  "https://www.weather.gov/srh/",
	  "1",
  ],

  [
	"2196F3",
	"Wind",
	// "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-80.60,28.39,10000/loc=-80.593,28.330",
	"https://www.ventusky.com/?p=32.88;-97.62;8&l=wind-10m&t=20250105/0300",
	"1",
  ],
  [
	"2196F3",
	"Rain Fall",
	"https://maps.cocorahs.org/?maptype=precip&datetype=daily&center=28.3893,-80.6088",
	//"https://www.cocorahs.org/Maps/ViewMap.aspx?state=fl&county=bv",
	// "https://www.cocorahs.org/Maps/GetMap.aspx?state=FL&county=BV&type=precip",
	"1",
  ],

// Right side slideout

  [
	"2196F3",
	"ISS Passes",
	"https://www.heavens-above.com/PassSummary.aspx?satid=25544&lat=28.3893&lng=-80.6088&loc=Cape_Canaveral&alt=0&tz=UCT",
	"1.0",
	"R",
  ],
  [
	"2196F3",
	"ISS Status",
	"https://www.ariss.org/current-status-of-iss-stations.html",
	"1.0",
	"R",
  ],
  [
	"2196F3",
	"Lightning",
	"https://map.blitzortung.org/#6.65/32.74/-97.559",
	"1",
	"R",
  ],
  [
	"2196F3",
	"DX Cluster",
	"https://dxcluster.ha8tks.hu/map/",
	"1",
	"R",
  ],
  [ "2196F3",
	"Contest",
	"https://www.contestcalendar.com/fivewkcal.html",
	"1",
        "R", 
  ],
  [ "2196F3",
	"POTA",
	"https://pota.app",
	"1",
   	"R",
  ],
  [
	"2196F3",
	"WinLink",
	"https://cms.winlink.org:444/maps/propagation.aspx",
	"1.0",
	"R",
  ],
// [
//	"2196F3",
	//"APRS",
	//"https://aprs.to/?center=28.3867,-80.7344&zoom=11",
	//"1.0",
  //],
  //[
//	"2196F3",
//	"OSCAR Status",
//	"https://www.amsat.org/status",
//	"1.0",
//	"R",
//  ],
  [
	"2196F3",
	"Band Plan",
	"https://kd4atw.org/wp-content/uploads/2012/05/band_plan.png",
	"1.2",
	"R",
  ],

];
// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!

// Row 1

const aIMG = [
  [
    "RADAR", 
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "FWD LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KFWS_loop.gif",
  ],
  [
	// "Tropical Outlook",
	"Tropical Outlook",
	"https://www.nhc.noaa.gov/xgtwo/two_atl_0d0.png",
	"https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png",
	"https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
	"https://www.cpc.ncep.noaa.gov/products/precip/CWlink/ghaz/gth_full_TConly_ATL.png",
  ],
  // Row 2
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=300&height=300&satid=25544",
    "iframe|https://heavens-above.com/PassSummary.aspx?satid=25544",
    "https://heavens-above.com/StarLink.aspx",
  ],
  [
	"",
	// Wx Widget - https://www.weatherandradar.com/weather-widget
	// Mineral Wells
        "iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=8864613&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Santo
	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=27923538&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Hudson Oaks
	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=3534246&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Port St. John
	//"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=206878&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Cocoa
	//"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=13474058&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Cocoa Beach
	//"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=18217784&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Satellite Beach
	//"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=14843524&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Melbourne
	//"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=16389861&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Palm Bay
	//"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=12914077&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Grant-Valkaria
	//"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=5565699&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Micco
	//"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=15365564&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
  ],
  [
	// "Forecast Graphics",
	"",
	"https://data.mesonet.org/data/public/noaa/metar/maps/realtime/latest.tair.png",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=rh&n=3",
	"https://data.mesonet.org/data/public/noaa/metar/maps/realtime/latest.tapp.png",
	"https://graphical.weather.gov/images/conus/MaxT1_conus.png",
	"https://graphical.weather.gov/images/conus/MinT1_conus.png",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=pop12",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=windspd&n=3",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=windgust&n=3",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=sky&n=3",
  ],
  // Row 3
  [
    "FIRE DANGER",
    "https://www.nifc.gov/modules/custom/nicc_outlooks/images/outlook_d1.png",
  ],
  [
	"Solar",
	"https://www.hamqsl.com/solarmap.php",
	"https://www.hamqsl.com/solarsun.php",
  ],
  ["YOUTUBE EXAMPLE", "iframe|https://www.youtube.com/embed/fzPFaXAV_2Y?autoplay=1&mute=1"],
  [
    "WEBSITE EXAMPLE",
    "iframe|https://globe.adsbexchange.com/?airport=YYZ",
  ],
  ["VIDEO EXAMPLE", "https://himawari8.nict.go.jp/movie/720/20240611_pifd.mp4"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"],
];

// Define tile image refresh/rotate rate in milliseconds.
// Use zero (0) for a single static image.
// Caution: Short intervals should be avoided to reduce the possibility the
// image server detects a Denial of Service attack and blocks the request.

const tileDelay = [
	// Top row
	120000,
	122000,
	124000,
	30000,
	// Middle row
	62000,
	64000,
	1800000,
	66000,
	// Bottom row
	60000,
	45000,
	62000,
	58000,
];
