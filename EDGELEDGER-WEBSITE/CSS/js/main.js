function initMap() {
    const loc = { lat: 14.442599, lng: 79.986458 };
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    const marker = new google.maps.Marker({ position: loc, map: map});
}