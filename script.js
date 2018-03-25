var map2 = L.Wrld.map("map2", "7e88122c3dae8f766615ba43659143ba", {
  center: [37.7952, -122.4028],
  zoom: 14,
  indoorsEnabled: true,
  displayEntranceMarkers: false
});

setTimeout(function() {
  map2.setView([37.7952, -122.4028], 16, {
    animate: false
  });
}, 5000);

function exitIndoors() {
  map2.indoors.exit();
}

function addCustomEntranceMarker(event) {
  var entrance = event.entrance;
  var marker = L.marker(entrance.getLatLng()).addTo(map2);

  marker.on("click", function() {
    if (map2.indoors.isIndoors()) {
      map2.indoors.exit();
    }
    else {
      map2.indoors.enter(entrance);
    }
  });
}

map2.indoors.on("indoorentranceadd", addCustomEntranceMarker);
var indoorControl = new WrldIndoorControl("widget-container", map2);


var weathers = [L.Wrld.themes.weather.Clear, L.Wrld.themes.weather.Overcast, L.Wrld.themes.weather.Rainy, L.Wrld.themes.weather.Snowy];
var weatherIndex = 2;
setInterval(function() {
  map2.themes.setWeather(weathers[weatherIndex]);
  weatherIndex = (weatherIndex + 1) % weathers.length;
}, 5000);

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      var newMarker = new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      });
      newMarker.addListener('click', function() {
        console.log('dfs');
        console.log();
        map2.setView([this.getPosition().lat(), this.getPosition().lng()], 19, {
          animate: false
        });
        var marker = L.marker([this.getPosition().lat(), this.getPosition().lng()], { title: "ddfs" }).addTo(map2);
      });
      markers.push(newMarker);

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
