export default function fetchMap(loc: { lat: number; lon: number }) {
  const mappls = window.mappls;
  if (!loc || !mappls) return;

  const map = new mappls.Map("map", {
    center: [loc.lat, loc.lon],
    zoom: 14,
    zoomControl: true,
    location: true,
  });

  map.on("load", function () {
    new mappls.Marker({
      map,
      position: { lat: loc.lat, lng: loc.lon },
      popup_html: "📍 You are here",
      draggable: false,
    });
  });
}
