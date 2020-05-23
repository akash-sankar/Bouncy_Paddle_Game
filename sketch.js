var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  paddleimg = loadImage("paddle.png");
  ballimg = loadImage("ball.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(50,200,10,10);
  paddle = createSprite(385,200,10,60);
  
  /* assign the images to the sprites */
  ball.addImage ("ball", ballimg);
  paddle.addImage ("paddle",paddleimg);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff (edges[0]);
  ball.bounceOff (edges[2]);
  ball.bounceOff (edges[3]);
  ball.bounceOff (paddle,randomVelocity);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff (edges[2]);
  paddle.bounceOff (edges[3]);
 
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y+20;
  }
  

  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY=random(-8,8);
  ball.velocityX=random(-8,8);
}

