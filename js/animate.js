$(document).ready(function(){

    
    //queus functionality
  	// div.animate({height:'300px',opacity:'0.4'},"slow");
  	// div.animate({width:'300px',opacity:'0.8'},"slow");
  	// div.animate({height:'100px',opacity:'0.4'},"slow");
    // div.animate({width:'100px',opacity:'0.8'},"slow");

    box1()
    $('button').click(function(){
        //stop all animation and go to end
        $('#demo').stop(true, true)
    })
})

function box1(){
    var div=$("#demo");
    div.animate({height:'300px',opacity:'0.4'},"slow");
  	div.animate({width:'300px',opacity:'0.8'},"slow");
  	div.animate({height:'100px',opacity:'0.4'},"slow");
    div.animate({width:'100px',opacity:'0.8'},"slow");
}

