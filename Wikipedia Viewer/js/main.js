$(document).ready(function(){
  console.log('ready');
  $('#searchText').on('keyup',function(e){
      var searchStr = e.target.value;
      $.ajax({
        url : 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&search=' + searchStr + '&format=json&origin=*',
        success : function(data) {
            showInfo(data);
        }
      });
  });

  function showInfo(data) {
    $('.infoWell').html(``);
    for(var i=0; i<data[1].length; i++){
         $('.infoWell').append(`
           <h3><a type="_blank" href="${data[3][i]}">${data[1][i]}</a></h3>
           <p>${data[2][i]}</p><hr>


        `);
    }
  }

});
