const topBarCenterText = `KJ5IRQ - EM02wt`;

	// Grid layout
  var layout_cols = 3;
  var layout_rows = 3;

	// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
	//Left Side Menus	
["add10d", "Back", "#", "1",],
["ffcc01", "Refresh", "#", "1",],
["ffcc01", "Solar Report", "https://solar.w5mmw.net/", "1.0",],


	//Right Side Menus
["0dd1a7", "Help", "#", "1", "R",],
["2196F3", "KMWL Impact Board", "https://aviationweather.gov/impactboard/?id=KMWL&thresh=imc&board=obs", "1.0", "R",],
["2196F3", "US Warn Map", "https://warn.pbs.org/", "1.0", "R",],


];
// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!

// Row 1

const aIMG = [
  [
	// A1
	"WX-Prediction",
	"https://www.wpc.ncep.noaa.gov/noaa/noaad1.gif?1736375551",
	"https://www.wpc.ncep.noaa.gov/noaa/noaad2.gif?1736375649",
	"https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif?1736375658",
	"https://radar.weather.gov/ridge/standard/CONUS_loop.gif",

  ],
  [
	// A2
	"Radar",
	"https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif",
	"https://radar.weather.gov/ridge/standard/SOUTHPLAINS_loop.gif?refreshed=1736373276316",
	"https://radar.weather.gov/ridge/standard/KFWS_loop.gif?refreshed=1736371876335",  
  ],
  [
	// A3
	"Warnings/Fire Weather",
	"https://www.spc.noaa.gov/products/activity_loop.gif",
    "https://www.spc.noaa.gov/wcm/2025_torww_to_date.png",
	"https://www.weather.gov/images/fwd/drought/latestdmtx.png",
	"https://www.spc.noaa.gov/products/fire_wx/day1fireotlk-overview.gif",
	"https://www.spc.noaa.gov/products/fire_wx/day2otlk_fire.gif",
	"https://www.spc.noaa.gov/products/exper/fire_wx/imgs/day6otlk_fire.gif",	
  ],
  [
	// B1 7 day Outlook and NWS Watches
	"WX-Outlook",
	"https://www.spc.noaa.gov/products/watch/validww.png",
	"https://www.spc.noaa.gov/products/outlook/day1otlk_2000.gif",
	"https://www.spc.noaa.gov/products/outlook/day2otlk_1730.gif",
	"https://www.spc.noaa.gov/products/exper/day4-8/day48prob.gif",
	"https://www.spc.noaa.gov/misc/SPC_5-tier_Convective_Outlook_Info_files/understanding_categories.png",
  ],
  [
	// B2
	"Reserved for Spotter",
	"iframe|src=https://www.spotternetwork.org/pages/map",
	//"https://services.swpc.noaa.gov/images/animations/geoelectric/InterMagEarthScope/EmapGraphics_1m/latest.png",
  ],  
  [
	// B3
	"Space Weather",
	"https://www.hamqsl.com/solar101vhf.php",
	"https://www.hamqsl.com/solar100sc.php",
	"https://www.hamqsl.com/solarpich.php",
  ], 
  [
	// C1
	"B3",
	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=8864613&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
  ], 
  [
	// C1
	"",
	"iframe|http://www.g4ilo.com/wwv/webprop.php",
  ], 
  [
	// C3
	"C1",
    "https://www.sws.bom.gov.au/Images/Solar/Solar%20Conditions/Solar%20Activity%20Plot/solplot.gif",
	"https://www.sws.bom.gov.au/Images/HF%20Systems/Global%20HF/Ionospheric%20Map/WorldIMap.gif",
	"https://spaceweather.bradford.ac.uk/ASAP_latest/flaremonitor_24.png",
	"https://services.swpc.noaa.gov/images/swx-overview-small.gif",
	"https://sdo.gsfc.nasa.gov/assets/img/latest/latest_4096_0171.jpg",
	"https://sdo.gsfc.nasa.gov/assets/img/latest/f_211_193_171.jpg",
	"iframe|https://vhf.dxview.org/",
  ], 
   
  ];

// Define tile image refresh/rotate rate in milliseconds.
// Use zero (0) for a single static image.
// Caution: Short intervals should be avoided to reduce the possibility the
// image server detects a Denial of Service attack and blocks the request.

const tileDelay = [
	// Top row
	10100,
	10300,
	10600,
	// Middle row
	62000,
	64000,
	1800000,
	// Bottom row
	60000,
	45000,
	62000,
];
