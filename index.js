var icon = document.querySelector(".icon");
var active = false;
              icon.addEventListener("click", function(){
                document.querySelector("body").classList.toggle("active");
                if(!active){
                active = true;
              }
              else{
                active = false;
              }
              });
