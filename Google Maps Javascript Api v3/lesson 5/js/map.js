let map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:30.033333, lng: 31.233334 },
    zoom: 8,
  });

  map.addListener('click',function(event){
    // console.log('lat = '+event.latLng.lat());
    // console.log('lng = '+event.latLng.lng());
    var marker = new google.maps.Marker({
        position:{lat:event.latLng.lat(),lng:event.latLng.lng()},
        map:map,
        title:'Test Marker ',
        draggable:true
    });

    
// drag
// dragstart 
// dragend
    google.maps.event.addListener(marker,'drag',function(markerevent){
      // document.getElementById('lat').innerHTML = markerevent.latLng.lat();
      // document.getElementById('lng').innerHTML = markerevent.latLng.lng();
      $('#lat').text(markerevent.latLng.lat());
      $('#lng').text(markerevent.latLng.lng());
      console.log(markerevent.latLng.lat());
      console.log(markerevent.latLng.lng());
    });

  });

    setTimeout(function(){
      if($('#map').find('.dismissButton').length == 1){
       $('#map').children('div:nth-of-type(2)').remove();
      }
    },1000);

}

$(document).ready(function(){
    initMap();
});