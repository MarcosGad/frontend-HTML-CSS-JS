let map;
var markers = [
  ['Test Marker ',29.833395918953304,32.20287745703124],
  ['Test Marker ',30.237613442065754,30.807613785156242],
  ['Test Marker ',29.895324123782157,30.225338394531242],
  ['Test Marker ',29.566189784188747,30.813106949218742],
  ['Test Marker ',30.213881636896133,31.939205582031242],
  ['Test Marker ',30.583444084289955,31.477779800781242],
  ['Test Marker ',30.194892070217932,31.604122574218742],
];

// var markers = [
//   [29.833395918953304,32.20287745703124],
//   [30.237613442065754,30.807613785156242],
//   [29.895324123782157,30.225338394531242],
//   [29.566189784188747,30.813106949218742],
//   [30.213881636896133,31.939205582031242],
//   [30.583444084289955,31.477779800781242],
//   [30.194892070217932,31.604122574218742],
// ];

let myMarkers = [];

function addMarker(latlng,title){
  return  new google.maps.Marker({
        position:latlng,
        map:map,
        title:title,
        draggable:true,
    });
}
 
function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:30.033333, lng: 31.233334 },
    zoom: 8,
  });

  const infoWindow = new google.maps.InfoWindow();

  for(let i=0; i < markers.length;i++){
 
      // var marker = new google.maps.Marker({
      //   position:{lat:markers[i][0],lng:markers[i][1]},
      //   map:map,
      //   title:'Test Marker ' + i,
      //   label:i+'',
      //   draggable:true,
      // });

      var marker = addMarker({lat:markers[i][1],lng:markers[i][2]},markers[i][0]+''+i);
    
      myMarkers.push(marker);

      console.log(myMarkers);

      myMarkers[i].addListener('click',function(){
        infoWindow.close();
        infoWindow.setContent('<h1>'+myMarkers[i].getTitle()+'</h1>');
        infoWindow.open(myMarkers[i].getMap(),myMarkers[i]);
      });
      
      $('.latlng').append(`
            <p>Lat`+i+` : <span id="lat`+i+`"></span> 
            Lng`+i+` : <span id="lng`+i+`"></span>
            <a href="#" class="removemarker" marker="`+i+`">remove Marker</a>
            </p>
      `);

      google.maps.event.addListener(marker,'dragend',function(markerevent){
            $('#lat'+i).text(markerevent.latLng.lat());
            $('#lng'+i).text(markerevent.latLng.lng());
      });
    }

    $(document).on('click','.removemarker',function(){
        var mark = $(this).attr('marker');
        console.log(mark);
        myMarkers[mark].setMap(null);
        $('#lat'+mark).parent('p').remove();
        // myMarkers.splice(mark,1);
        console.log(myMarkers);
        return false;
    });

    map.addListener('click',function(event){
      console.log('add new marker');
      var marker = addMarker({lat:event.latLng.lat(),lng:event.latLng.lng()},'Test Marker');
      myMarkers.push(marker);
      console.log(myMarkers);

      myMarkers[7].addListener('click',function(){
        infoWindow.close();
        infoWindow.setContent('<h1>'+myMarkers[7].getTitle()+'</h1>');
        infoWindow.open(myMarkers[7].getMap(),myMarkers[7]);
      });

      // console.log(marker.title);
      // console.log(marker.position.lat());
      // console.log(marker.position.lng());

      google.maps.event.addListener(marker,'drag',function(markerevent){
        $('#lat').text(markerevent.latLng.lat());
        $('#lng').text(markerevent.latLng.lng());
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