nosex=0;
nosey=0;
difference=0;
rightwristX=0;
leftwristX=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
canvas.position(560,150)
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is initialised');
    
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex+"nosey="+nosey);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX+"difference="+difference);

    }
}
function draw(){
    background('green');
    document.getElementById("square_side ").innerHTML = "width and hieght of a square will be="+difference+"px";
    fill('blue');
    stroke('blue');
    square(nosex,nosey,difference);

}