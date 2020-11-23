import colorPalette from "@/configuration/colorPalette";

const {
  COLOR_LINE,
  COLOR_POINT_FILL,
  COLOR_SELECTED_POINT
} = colorPalette;

const COLORS = {
  LINE: COLOR_LINE,
  POINT: COLOR_SELECTED_POINT,
  POINT_FILL: COLOR_POINT_FILL,
};

const POINT_MARKER_ICON_CONFIG = {
  path: "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
  strokeOpacity: 0.7,
  strokeWeight: 4,
  strokeColor: COLORS.POINT,
  fillColor: COLORS.POINT_FILL,
  fillOpacity: 0.7,
  scale: 1,
};

const LINE_SYMBOL_CONFIG = {
  path: "M 0,-2 0,2",
  strokeOpacity: 1,
  strokeWeight: 2,
  scale: 1
};

const LINE_PATH_CONFIG = {
  clickable: false,
  geodesic: true,
  strokeOpacity: 1,
  strokeWeight: 1,
  strokeColor: COLORS.LINE,
  fillColor: COLORS.LINE,
  fillOpacity: 0.35,
  icons: [
    {
      icon: LINE_SYMBOL_CONFIG,
      repeat: "10px"
    }
  ]
};

const mapSettings = {
  clickableIcons: false,
  streetViewControl: false,
  panControlOptions: false,
  mapTypeControl: false,
  zoomControlOptions: {
    style: "SMALL"
  },
  zoom: 16,
  styles: []
};

export { mapSettings, LINE_PATH_CONFIG, POINT_MARKER_ICON_CONFIG };
