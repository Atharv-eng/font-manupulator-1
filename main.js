
difference=0;

rightWristX=0;
leftWristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(560,500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function modelLoaded()
{
   console.log('PoseNet is initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      leftWristX=results[0].pose.leftWrist.x;
      rightWristX=results[0].pose.rightWrist.x;
      difference=floor(leftWristX-rightWristX);
      console.log("leftWristX="+ leftWristX +"rightWristX="+ rightWristX+ "difference="+ difference);
  }
}

function draw()
{
    background('#969A97');
    document.getElementById("name").innerHTML="font size of the text will be="+difference+"px";
    fill('#FFE787');
    text('Atharv', 50, 400);
}
