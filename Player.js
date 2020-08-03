class Player{
    constructor(){
        this.sprite=createSprite(80,height-100,10,10);
        this.sprite.addAnimation("player",playerImg);
        this.sprite.scale=2;
        
        this.sprite.setCollider("rectangle",-20,30,this.sprite.width-80,this.sprite.height-80);
    }
    jump(){
        this.sprite.velocityY=-20
    }
    gravity(g){
     this.sprite.velocityY =this.sprite.velocityY+g;
    }
}