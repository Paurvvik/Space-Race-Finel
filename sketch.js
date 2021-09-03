var score1=0
var score2=0
var gameState="START"
var heart1array=[]
var heart2array=[]


function preload(){
  rocket1Img = loadImage("rocket1.png")
  rocket2Img = loadImage("rocket2.png")
  whitelineImg = loadImage("white line.png")
  ball2Img = loadImage("ball2.png")
  heart1Img = loadImage("heart.png")
  heart2Img = loadImage("heart.png")
  heart3Img = loadImage("heart.png")
  heart4Img = loadImage("heart.png")
  heart5Img = loadImage("heart.png")
  heart6Img = loadImage("heart.png")
  backgroundImg = loadImage("background.png")
  astroraceImg = loadImage("astrorace.png")
}

function setup() {
  createCanvas(800,800);
button1 = createButton("START")
button1.position(350,615)


rocket1 = createSprite(205,715,10,10)
rocket2 = createSprite(600,715,10,10)
whiteline = createSprite(400,400,10,10)
line = createSprite(400,3,800,10)
heart1 = createSprite(20,100,10,10)
heart2 = createSprite(20,120,10,10)
heart3 = createSprite(20,140,10,10)
heart4 = createSprite(780,100,10,10)
heart5 = createSprite(780,120,10,10)
heart6 = createSprite(780,140,10,10)

heart1array=[heart1,heart2,heart3]
heart2array=[heart4,heart5,heart6]

rocket1.addImage(rocket1Img)
 rocket2.addImage(rocket2Img)
 heart1.addImage(heart1Img)
 heart2.addImage(heart2Img)
 heart3.addImage(heart3Img)
 heart4.addImage(heart4Img)
 heart5.addImage(heart5Img)
 heart6.addImage(heart6Img)
 whiteline.addImage(whitelineImg)
 whiteline.velocityY=0.5
 

ballGroup = new Group()

}


function draw() {


  if(gameState==="PLAY"){

    button1.hide()

    background(backgroundImg);
  textSize(70)
  fill("white")
  text(score1,100,750)  
  text(score2,500,750)
  
  drawSprites();
     
  if(whiteline.y>1200){
    gameState="END"
  }

if(heart1array.length===0 || heart2array.length===0){  
gameState="END"
}

rocket1.overlap(ballGroup,die)
rocket2.overlap(ballGroup,die2)


    if (keyDown("w")){
      rocket1.y-=5
    }
    if (keyDown("up")){
      rocket2.y-=5
    }
    if(rocket1.isTouching(line)){
      score1++
      rocket1.x=205
     rocket1.y=715
       }
       if(rocket2.isTouching(line)){
         score2++
         rocket2.x=600
        rocket2.y=715
          }
          if(frameCount%30===0){
            ball2 = new Ball ()
            ballGroup.add(ball2.body)
            
          }
  }

  if(gameState==="START"){
    background(astroraceImg)
    button1.mousePressed(()=>{
     gameState="PLAY"
    })
  }

 
     


if(gameState==='END'){
  text("GAME OVER",200,400)
  whiteline.velocityY=0
}


}

function die(rocket,ball){

rocket.y=715
ball.destroy()
var a = heart1array.pop()
a.destroy()
}
function die2(rocket,ball){

  rocket.y=715
  ball.destroy()
  var a = heart2array.pop()
a.destroy()
  }