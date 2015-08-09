function showMap(){
  $('#show-map').bind('click', function(e){
    $('#map-container').show();
  })
}

$(document).ready(function(){
  $('#map-container').hide();
  showMap();
})