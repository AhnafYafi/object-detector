img = "";
status = "";
objects = [];
objectDetector = "";
function preload()
{
    img = loadImage('dog_cat.jpg');
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects";
}
function modelLoaded()
{
    console.log("Modal Is Ioaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
  if(error)
  {
      console.log(error)
  }else{
  console.log(results);
  objects = results;
}
}
function draw()
{
    image(img,0,0,640,420);

    if(status != "")
    {
for (var i = 0; i < objects.length; i++)
{
    document.getElementById("status").innerHTML = "Status : Object Dectected";

    fill("#035afc");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
    noFill()
    stroke("#035afc");
    rect(objects[i].x , objects[i].y , objects[i].width, objects[i].height);

    
}
    }
   
}