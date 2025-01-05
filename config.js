const topBarCenterText = `KJ5IRQ - EM02wt`;

// Grid layout
  var layout_cols = 4;
  var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
    //Left Side Menus
  ["add10d", "Back", "#", "1"],
  ["ff9100", "Refresh", "#", "1"],
  // ["0dd1a7", "Help", "#", "1"],
  ["2196F3","KMWL Impact Board","https://aviationweather.gov/impactboard/?id=KMWL&thresh=imc&board=obs","1.0","R",],
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
	"",
	"https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg",
	"https://services.swpc.noaa.gov/images/animations/ovation/south/latest.jpg",
	"https://services.swpc.noaa.gov/images/animations/enlil/latest.jpg",
	"https://services.swpc.noaa.gov/images/animations/geoelectric/InterMagEarthScope/EmapGraphics_1m/latest.png",
  ],
  [
 	"",
	"https://www.hamqsl.com/solarmuf.php",
	"https://www.hamqsl.com/solarmap.php",
	"https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
	"https://services.swpc.noaa.gov/images/swx-overview-large.gif",
	"https://services.swpc.noaa.gov/images/animations/wam-ipe/wfs_ionosphere_new/latest.png",
	"https://prop.kc2g.com/renders/current/mufd-normal-now.svg",
  ],
  [
	"Propagation",
	"https://img.propagation.dr2w.de/n-america/10M/dr2w_animation_10M.gif",
		"https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG",
	"https://img.propagation.dr2w.de/n-america/20M/dr2w_animation_20M.gif",
	"https://img.propagation.dr2w.de/n-america/40M/dr2w_animation_40M.gif",
	"https://img.propagation.dr2w.de/n-america/80M/dr2w_animation_80M.gif",
	"https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
	"",
	"https://qsl.net/n5ng/HAM/hamclock.bmp",
  ],

// Row 2

  [
	"Sun/Moon Grey Line",
	"https://www.timeanddate.com/scripts/sunmap.php?iso=now",
	"https://www.timeanddate.com/scripts/sunmap.php?obj=moon&iso=now",
  ],
  [
	"ISS",
	"https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
	"iframe|https://www.youtube.com/embed/OCem0E-0Q6Y?autoplay=1&mute=1",
	"iframe|https://www.youtube.com/embed/wG4YaEcNlb0?autoplay=1&mute=1",
  ],
  [
	"",
	"https://www.hamqsl.com/solar101vhf.php",
	"https://www.hamqsl.com/solar100sc.php",
	"https://www.hamqsl.com/solarpich.php",
	"https://services.swpc.noaa.gov/images/animations/suvi/primary/map/latest.png",
  ],
  [
	"2 Day Hourly Forecast",
	"https://forecast.weather.gov/meteograms/Plotter.php?lat=28.3893&lon=-80.6088&wfo=MLB&zcode=FLZ447&gset=18&gdiff=3&unit=0&tinfo=EY7&ahour=0&pcmd=1111111111&lg=en&indu=1!1!1!&dd=3&bw=0&hrspan=48",
  ],

// Row 3

  [
	"RADAR",
	"https://radar.weather.gov/ridge/standard/KMLB_loop.gif",
	//"https://radar.weather.gov/ridge/standard/SOUTHEAST_loop.gif",
	"https://radar.weather.gov/ridge/standard/SOUTHEAST_loop.gif",
	"https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif",
	//"https://radar.weather.gov/ridge/standard/CONUS_loop.gif",
  ],
  [
	"Lightning",
	"https://images.lightningmaps.org/blitzortung/america/index.php?animation=florida",
	"https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
	"Port",
	"iframe|https://www.youtube.com/embed/FTw5xuq2swo?autoplay=1&mute=1",
  ],
  [
	"Cape",
	"iframe|https://www.youtube.com/embed/Jm8wRjD3xVA?autoplay=1&mute=1",
	"iframe|https://www.youtube.com/embed/uH1W01t_lGc?autoplay=1&mute=1",
	"iframe|https://www.youtube.com/embed/E1uVzfQG_Yo?autoplay=1&mute=1",
  ],
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
