function bindShowMap(){
  $('#show-map').bind('click', function(e){
    $('#map-container').toggle();
    setMap();
    $('html, body').animate({
        scrollTop: $("#map-container").offset().top
    }, 1000);
  })
}

function setMap(){
  var latlng = new google.maps.LatLng(53.3450044, -6.272482699999955);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };
  map = new google.maps.Map($('#map-canvas')[0], myOptions);
  gMapObj = map;

  var marker = new google.maps.Marker({
    position: latlng,
    map: map
  });
}

$(document).ready(function(){
  $('#map-container').hide();
  bindShowMap();
})
