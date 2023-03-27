mapboxgl.accessToken = 'pk.eyJ1IjoiZHJua3BpcGVib21iIiwiYSI6ImNsZnI2a3ZodTA1Z2kzemtpcHd3Ymcza2gifQ.c0-7l0K5Wu57VINpenRkTQ';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

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
}

