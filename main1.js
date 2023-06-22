nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;


function setup(){
    video=createCapture (VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#d3d3d3");
    fill("#F90093");
    stroke("#F90093");
    square(nosex, nosey, difference);
    document.getElementById("square_side").innerHTML="The Width and Height of the Square is " +difference+ "px";
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = " +nosex+ " nosey = " +nosey);

        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("leftwristx = " +leftwristx+ " rightwristx = " +rightwristx+ " difference = " +difference);
        
    }
}


 