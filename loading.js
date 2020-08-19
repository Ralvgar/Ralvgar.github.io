function start(){
  $("#button").css("visibility", "hidden");
     var duration = 5000; // it should finish in 5 seconds !
     var percent = duration / 100; // 1 percent of duration
     var i = 0 ;
     var interval = setInterval(function(){
        i++;
        $("#box").css("width", i + "%");
        $("#box").css("opacity", 1);
        $("#prc").text(i + "%");
        $("#msg").text("Loading...");
        if(i>=100){
            clearInterval(interval);
            $("#msg").text("Done!");
            $("#button").css("visibility", "visible");
        }
    }, percent);
}
