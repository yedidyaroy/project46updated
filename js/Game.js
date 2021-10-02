class Game{
    constructor(){}
    start(){
        if (gameState===0){
            background(bgImg1); 
            player=new Player();
            form=new Form();
            form.display();
        }
        pikachu=createSprite(200,550,10,10);
        pikachu.addAnimation("running",pikachuImg);
        pikachu.scale=0.7;

        invisibleGround = createSprite(550,650,2000,10);
        invisibleGround.visible = false;
    }

    play(){
        background(bgImg2); 
        if(keyDown("UP") && pikachu.y >= 150) {
            pikachu.velocityY = -10;
          }

         pikachu.velocityY = pikachu.velocityY + 0.8;
         pikachu.collide(invisibleGround)

         if (bgImg2.x < 0){
            bgImg2.x = bgImg2.width/2;
          }

        drawSprites();
    }
}