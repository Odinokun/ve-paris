module.exports = function () {

  // begin map
  const contactsMap = document.getElementById('contacts-map');
  if (contactsMap) {
    google.maps.event.addDomListener(window, "load", initialize);
  }


  function initialize() {
    const mapDiv = document.getElementById("contacts-map");

    map = new google.maps.Map(mapDiv, {
      maxZoom: 18,
      minZoom: 3,
      zoom: 14,
      disableDefaultUI: false,
      center: {lat: 48.858728859793594, lng: 2.359118869249611},
      //Shades of Grey https://snazzymaps.com/style/38/shades-of-grey
      styles: [
        {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
            {
              "lightness": 63
            },
            {
              "hue": "#ff0000"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#000bff"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
            {
              "color": "#4a4a4a"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text",
          "stylers": [
            {
              "weight": "0.01"
            },
            {
              "color": "#727272"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels",
          "stylers": [
            {
              "color": "#ff0000"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#ff0000"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#545454"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#737373"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#7c7c7c"
            },
            {
              "weight": "0.01"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#404040"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "lightness": 16
            },
            {
              "hue": "#ff001a"
            },
            {
              "saturation": -61
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#828282"
            },
            {
              "weight": "0.01"
            }
          ]
        },
        {
          "featureType": "poi.government",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#4c4c4c"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#00ff91"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#7b7b7b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#999999"
            },
            {
              "visibility": "on"
            },
            {
              "weight": "0.01"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#ff0011"
            },
            {
              "lightness": 53
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#626262"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#676767"
            },
            {
              "weight": "0.01"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#0055ff"
            }
          ]
        }
      ]
    });

    let marker = new google.maps.Marker({
      // Определяем позицию маркера
      position: {lat: 48.858728859793594, lng: 2.359118869249611},
      // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
      map: map,
      // Укажем свою иконку для маркера
      icon: "assets/img/marker.png"
    });
  }


  // end map

};