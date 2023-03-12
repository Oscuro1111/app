
/*
  Author: Autocratic(Sahil)
*/
const Setup = (
     
    dom=>{
        const State =  {

            images:[],
            total:0
        };
        const img = dom.getElementById("img-change");

        
         
        return {
            loadImages:async (timeMillisec)=>{


                let res = await fetch(window.origin+"/getNum");
                let imgs  = await  res.json();
                State.images = imgs.files;

                State.total = State.images.length;
                Setup.Init(timeMillisec);
            }
            , 
            Init:(timeMillisec)=>{
                img.src=`images/${State.images[Math.floor(Math.random()*State.total)]}`;
               setInterval(()=>img.src=`images/${State.images[Math.floor(Math.random()*State.total)]}`
               , timeMillisec);
               
        }}
    }
)(document);

Setup.loadImages(5000);
