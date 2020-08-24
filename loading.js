function start(){
    document.getElementById('button').setAttribute("disabled", "");

    var duration = 5000; // it should finish in 5 seconds
    var percent = duration / 100; // 1 percent of duration
    var i = 0 ;
    var interval = setInterval(function(){
      i++;
      document.getElementById('box').style.width = i + "%";
      document.getElementById('box').style.opacity = 1;
      document.getElementById('prc').textContent = i + "%";
      document.getElementById('msg').textContent = "Loading...";
      if(i>=100){
          clearInterval(interval);
          document.getElementById('msg').textContent = "Done!";
          document.getElementById('button').removeAttribute("disabled", "");
      }
  }, percent);
}
