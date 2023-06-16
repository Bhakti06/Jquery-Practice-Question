$('#button1').click(function(){ 
    $( "p" ).addClass(function( index, currentClass ) {
      var addedClass;
       if ( currentClass === "w3r_bg_orange" ) {
        addedClass = "w3r_bg_red";
        }
     return addedClass;
    });
    });
    