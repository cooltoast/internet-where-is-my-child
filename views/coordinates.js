const GREEN = "#68c53f";
const DARK_GREEN = "#2f591b";
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
  const { LatLngBounds } = await google.maps.importLibrary("core");

  map = new Map(document.getElementById("map"), {
    mapId: "where-is-my-child",
  });

  const bounds = new LatLngBounds();

  const coordinatesResp = await fetch("/api/coordinates");
  const coordinates = await coordinatesResp.json();

  coordinates.data.map((coordinate, index) => {
    bounds.extend(coordinate);

    let options = {
      map,
      position: coordinate,
      title: coordinate.lat + ", " + coordinate.lng,
    };

    if (index == coordinates.length - 1) {
      const pinBackground = new PinElement({
        background: GREEN,
        glyphColor: DARK_GREEN,
        borderColor: DARK_GREEN,
      });

      options.content = pinBackground.element;
    }

    return new AdvancedMarkerElement(options);
  });

  map.fitBounds(bounds);
}

initMap();
