
// scroll vers haut de page depuis flèche du coté
  $('#haut').click(function(e){
    $('html, body').animate({scrollTop:0}, 1500);
    e.preventDefault();
});