$('#button1').click(function(){ 
    $( "input[name!='color']" ).next().append( "<b>: not a color</b>" );
    });
    