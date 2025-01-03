const topBarCenterText = `KJ5IRQ - EM02wt`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "KJ5IRQ", "https://kj5irq.radio", "1"],
  [
    "2196F3",
    "NWS Fort Worth/Dallas",
    "https://www.weather.gov/fwd/",
    "1",
  ],
    [
    "2196F3",
    "FIRE TEMP",
    "https://www.star.nesdis.noaa.gov/GOES/sector_band.php?sat=G16&sector=sp&band=FireTemperature&length=24",
    "1",
  ],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "FWD LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KFWS_loop.gif",
  ],
  [
	// "Tropical Outlook",
	"",
	"https://www.nhc.noaa.gov/xgtwo/two_atl_0d0.png",
	"https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png",
	"https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
	"https://www.cpc.ncep.noaa.gov/products/precip/CWlink/ghaz/gth_full_TConly_ATL.png",
  ],
  [
    "ISS POSITION",
    "http://wsn.spaceflight.esa.int/iss/index_portal.php",
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
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_ny.png",
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

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [
  11200,10000,11000,10100,
  10200,10500,10300,10600,
  30400,60700,60900,10800
];
