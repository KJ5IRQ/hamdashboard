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
  // ["ff9100", "Refresh", "#", "1"],
  // ["0dd1a7", "Help", "#", "1"],
  
  [
	"2196F3",
	"Launches",
	"https://www.spacelaunchschedule.com/category/fl",
	"1.0",
	"R",
  ],
  [
	"2196F3",
	"Forecast",
	"https://forecast.weather.gov/MapClick.php?lat=28.3937444&lon=-80.6064444",
	"1.0",
	"R",
  ],
  [
	"2196F3",
	"Wx Outlook",
	"https://forecast.weather.gov/wwamap/wwatxtget.php?cwa=MLB&wwa=hazardous%20weather%20outlook",
	"1.5",
	"R",
  ],
  [
	"FF000F",
	"Wx Alerts",
	"https://alerts.weather.gov/search?zone=FLC009", // ,FLC095,FLC117",
	"1.3",
	"R",
	// ,FLC009"; - Brevard
 	// ,FLC095"; - Orange
 	// ,FLC117"; - Seminole
  ],
  [
	"FF000F",
	"NWS SAFER",
	"https://www.arcgis.com/apps/MapSeries/index.html?appid=ea8b0eeb2e9c45b790329c0ed2fdc225",
	"1",
	"R",
  ],
  [
	"2196F3",
	"Wx Obs",
	//"https://www.weather.gov/mlb/obs",
	//"https://forecast.weather.gov/data/obhistory/KXMR.html",
	//"https://www.weather.gov/wrh/timeseries?site=KXMR",
	//"https://www.weather.gov/wrh/timeseries?site=KTTS",
	"https://www.weather.gov/wrh/timeseries?site=KXMR",
	"1.0",
	"R",
  ],
  [
	"2196F3",
	"Hi-Res",
	//"https://radar.weather.gov/?settings=v1_eyJhZ2VuZGEiOnsiaWQiOiJ3ZWF0aGVyIiwiY2VudGVyIjpbLTgxLjc3MSwyOC40MDVdLCJsb2NhdGlvbiI6Wy04MC43NzksMjguNDA2XSwiem9vbSI6OC41MTAxMjg5NjY2MzMxNTJ9LCJhbmltYXRpbmciOnRydWUsImJhc2UiOiJzdGFuZGFyZCIsImFydGNjIjpmYWxzZSwiY291bnR5IjpmYWxzZSwiY3dhIjpmYWxzZSwicmZjIjpmYWxzZSwic3RhdGUiOmZhbHNlLCJtZW51Ijp0cnVlLCJzaG9ydEZ1c2VkT25seSI6ZmFsc2UsIm9wYWNpdHkiOnsiYWxlcnRzIjowLjgsImxvY2FsIjowLjYsImxvY2FsU3RhdGlvbnMiOjAuOCwibmF0aW9uYWwiOjAuNn19",
	"https://moe.met.fsu.edu/~mnissenbaum/RadarArchive/KMLB/loop.html",
	"1",
	"R",
  ],
  [
	"2196F3",
	"Lightning",
	"https://map.blitzortung.org/#7.05/28.33/-81.38",
	"1",
	"R",
  ],
  [
	"2196F3",
	"Wind",
	// "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-80.60,28.39,10000/loc=-80.593,28.330",
	"https://www.ventusky.com/?p=28.25;-80.85;8&l=wind-10m",
	"1",
	"R",
  ],
  [
	"2196F3",
	"Rain Fall",
	"https://maps.cocorahs.org/?maptype=precip&datetype=daily&center=28.3893,-80.6088",
	//"https://www.cocorahs.org/Maps/ViewMap.aspx?state=fl&county=bv",
	// "https://www.cocorahs.org/Maps/GetMap.aspx?state=FL&county=BV&type=precip",
	"1",
	"R",
  ],
  [
	"2196F3",
	"AQI",
	"https://ca.dep.state.fl.us/mapdirect/?map=9e94c40966164a31b162557510e7f0cc",
	//"https://gispub.epa.gov/airnow/?tab=loops&contours=ozonepm&xmin=-9226066.634327892&xmax=-8756437.532543994&ymin=3192659.3491188874&ymax=3364184.04059074&monitors=ozonepm",
	"1",
	"R",
  ],
  [ "9C33FF",
	"Aircraft",
	"https://globe.adsbexchange.com/?lat=28.378&lon=-80.709&enableLabels&extendedLabels=1&zoom=11",
	"1",
	"R",
  ],
  [ "9C33FF",
	"Marine",
	"https://www.marinetraffic.org/ships-in-port/Port%20Canaveral/us/type-Port",
	"1",
	"R",
  ],
  //[ "33E3FF",
   // "Pier Cam",
	//"https://www.youtube.com/embed/F8y1uqHJsLc?autoplay=1&mute=1",
	//"1",
  //],
  [
	"33E3FF",
	"Beach Cam 1",
	"https://www.surfguru.com/widget/surf-forecast/cocoa-beach-pier-north?aud=0&rwcl=11354",  // North of Pier
	"1",
	"R",
  ],
  [
	"33E3FF",
	"Beach Cam 2",
	"https://www.surfguru.com/widget/surf-forecast/cocoa-beach-pier-north?chk=78&aud=0&rwcl=11356", // South of Pier
	"1",
	"R",
  ],
  [
	"33E3FF",
	"Beach Cam 3",
	"https://www.surfguru.com/widget/surf-forecast/Downtown-Cocoa-Beach?chk=83&aud=0&rwcl=18293", // Minutemen 
	"1",
	"R",
  ],
  [
	"33E3FF",
	"Jetty Cam",
	"https://www.surfguru.com/widget/surf-forecast/jetty-park-surf-report?chk=79&aud=0&rwcl=11355",
	"1",
	"R",
  ],
// Right side slideout
  //["2196F3", "TIME.IS", "https://time.is", "1", "R"],
//  [						// HAMCLOCK
//	"2196F3",					// HAMCLOCK
	//"Ham Clock",				// HAMCLOCK
	//"http://192.168.1.133:8081/live.html",	// HAMCLOCK
	//"1.0",					// HAMCLOCK
  //],						// HAMCLOCK
  [
	"2196F3",
	"DX Cluster",
	"https://dxcluster.ha8tks.hu/map/",
	"1",
  ],
  [ "2196F3",
	"Contest",
	"https://www.contestcalendar.com/fivewkcal.html",
	"1",
  ],
  [ "2196F3",
	"POTA",
	"https://pota.app",
	"1",
  ],
  [
	"2196F3",
	"WinLink",
	"https://cms.winlink.org:444/maps/propagation.aspx",
	"1.0",
  ],
// [
//	"2196F3",
	//"APRS",
	//"https://aprs.to/?center=28.3867,-80.7344&zoom=11",
	//"1.0",
  //],
  [
	"2196F3",
	"ISS Passes",
	"https://www.heavens-above.com/PassSummary.aspx?satid=25544&lat=28.3893&lng=-80.6088&loc=Cape_Canaveral&alt=0&tz=UCT",
	"1.0",
  ],
  [
	"2196F3",
	"ISS Status",
	"https://www.ariss.org/current-status-of-iss-stations.html",
	"1.0",
  ],
  [
	"2196F3",
	"OSCAR Status",
	"https://www.amsat.org/status",
	"1.0",
  ],
  [
	"2196F3",
	"Band Plan",
	"https://kd4atw.org/wp-content/uploads/2012/05/band_plan.png",
	"1.2",
  ],
  [
 	"2196F3",
	"GMRS Query",
	"https://gmrs.app",
	"1.0",
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
