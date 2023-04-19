mapboxgl.accessToken = 'pk.eyJ1IjoiZHJua3BpcGVib21iIiwiYSI6ImNsZnI2a3ZodTA1Z2kzemtpcHd3Ymcza2gifQ.c0-7l0K5Wu57VINpenRkTQ';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

//declare variable 
var directions;

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([-2.5918, 51.4538])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: center, // starting position [lng, lat]
        zoom: 15 // starting zoom
        });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
}

function setDestination(lng, lat) {
    // Set the destination of the map to the specified coordinates
    directions.setDestination([lng, lat]);
    // Zoom in to the destination location
    map.flyTo({ center: [lng, lat], zoom: 15 });
}

// Assign setDestination to the window object to make it global
window.setDestination = setDestination;




//function setDestination(){ 
    //var Destination = { lat: 51.452011, lng: -2.635600 };
    //directions.setDestination(Destination);
//}




    
    
    