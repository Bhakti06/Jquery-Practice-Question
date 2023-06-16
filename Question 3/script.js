$( "#button1" ).click(function() {
    $( "div:animated" ).toggleClass( "colored" );
  });
   
  function animateIt() {
    $( "#div1,#div2" ).slideToggle( "slow", animateIt );
  }
   
  animateIt();
  