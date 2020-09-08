var player1,player2;
var player1img,player2img;
var timer;
function preload(){
    player1img = loadImage("images/rocket1.png")
    player2img = loadImage("images/rocket2.png")
}
function setup(){
    createCanvas(800,800)
    player1 = createSprite(100,750,50,50);
    player2 = createSprite(600,750,50,50);
 player1.addImage(player1img);
 player1.scale = 0.2;
 player2.addImage(player2img);
 player2.scale = 0.2;
 timer = createSprite(400,650,10,350)
}
function draw(){
    background("black")
    /*strokeWeight(1.5)
    stroke("white")
    line(400,800,400,500)*/

  if(keyDown("w")){
    player1.y = player1.y - 2
    }
    if(keyDown("u")){
        player2.y = player2.y - 2
        }

        timer.velocityY = 1;

        if(timer.visible === false){
            console.log("end")
        }
    drawSprites();
}