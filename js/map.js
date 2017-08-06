function initMap() {
    var myOptions = {
        zoom: 11,
        center: new google.maps.LatLng(48.785676, 21.128146),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel:  false
    };
    map = new google.maps.Map(document.getElementById('map'), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(48.785676, 21.128146)
    });
    infowindow = new google.maps.InfoWindow({content:
        '<strong>Hotel Dam</strong><br>Hotel Dam, Košická Belá 220<br>044 65  Košická Belá<br>'
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
