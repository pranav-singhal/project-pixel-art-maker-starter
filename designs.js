// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var $table = $('table')
$(function(){
  $('#colorReset').click(function(){
    $('td').css('background-color','#fff');
  });
  $('#canvasReset').click(function(){
    location.reload(true);
  });
  $('input[type="submit"]').click(function(event){
    $('.hidden').css('display','inline-block');
    event.preventDefault();
    makeGrid($('#inputHeight').val(),$('#inputWidth').val());
  });
  $table.on('contextmenu',function(event){
    event.preventDefault();
  });
  $table.on('mousedown','td' ,function(){
    console.log("i was clicked");
    $('td').mousemove(function(event){
      console.log("i was moved over");
      fillColor($('input[type="color"]').val(),$(event.target));

    });
    fillColor($('input[type="color"]').val(),$(this));

  }).on('mouseup','td',function(){
    console.log("mouse no longer clicked");
    $('td').off();
  })
})




function makeGrid(width,height) {


  var rows = height;
  var columns = width;
  var grid = $('#pixelCanvas').children('tbody').first();
  grid.html('');
  for(i=0;i<width;i++){
    grid.append("<tr></tr>");
  }
  $('tr').each(function(index){
    for(j=0;j<height;j++){

      $(this).append('<td></td>');
    };
  })

};
function fillColor(color,td){
  td.css('background-color',color);
}
