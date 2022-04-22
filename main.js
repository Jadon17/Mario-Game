noseX = 0;
noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");

	coin_collect = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
	mariojump = loadSound("jump.wav");
	kick = loadSound("kick.waav");
	mariodie = loadSound("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('gameconsole');

	poseNet = ml5.poseNet(video,modelloaded);
	poseNet.on('pose', gotposes);
}

function draw() {
	game()
}

function modelloaded(){
	console.log("MODEL HAS SUCCESFULLY LOADED !!");
}

function gotposes(results){
	if (results.length > 0){
		console.log(results);
		noseX =  results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}


