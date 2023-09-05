status="";
img="";

 function preload()
 {
    img=loadImage("apple.webp");
 } 

 function setup()
 {
    canvas=createCanvas(700,500);
    canvas.position(1050,600);
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects";
 }

 function modelLoaded()
 {
    status=true;
    objectDetector.detect(img,gotResults); 
 }

 function gotResults(error,result)
 {
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(result);
    }
 }

 