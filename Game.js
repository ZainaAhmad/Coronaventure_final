class Game{
    constructor(){
        this.virusGroup=new Group();
        this.x=600;
        this.playButton=createSprite(width/2,height/2+100,50,50);
        this.playButton.addImage(playButtonImg);
        this.playButton.scale=1
        this.house=createSprite(8500,height/2,10,10);
        this.house.addImage(houseImg);
        this.house.visible=true;
        this.x1=1200
        this.itemGroup=new Group();
        this.time=3;
        this.flag=0;
        this.surveyButton=createSprite(8000,500,10,10);
        this.surveyButton.addImage(surveyButtonImg);
        this.surveyButton.visible=false;
    }
    start(){
        textSize(20);
        fill ("white");
        text("Makenzie is a girl who is running away from the Coronavirus which is all around her.",width/2-300,height/4);
        text("Makenzie has to try not to get infected, which happens when the virus touches her.",width/2-300,height/4+50);
        text("She needs to run and reach her house.Along the way, she would be getting",width/2-275,height/4+100);
        text("Masks and sanitizers to help her reach home safely.",width/2-225,height/4+150);
        textSize(50);
        fill ("white");
        textStyle(BOLD);
        text("CORONAVENTURE",width/2-200,height/8);
        player.sprite.visible=false;   
        if(mousePressedOver(this.playButton)){
            gameState=1;
        }
     }
     play(){
        
         this.spawnHelpingItems();
         if(player.sprite.isTouching(this.itemGroup)){
            this.flag=1;
            this.itemGroup.destroyEach();
         }
         if(this.flag===1){
            this.timer();
            textSize(50);
            fill("white")
            text(this.time,camera.position.x,camera.position.y)
         }
         if(this.time<=0){
             this.flag=0;
             this.time=3;
         }
        if(player.sprite.isTouching (this.virusGroup)&&this.flag===0) {
           gameState=2
        }
        if(player.sprite.isTouching (this.house)){
            gameState=3
        }
        
        this.spawnVirus();
         player.sprite.collide(ground);
         ground.x=player.sprite.x
         player.gravity(0.5);
         this.playButton.visible=false;
         player.sprite.visible=true;
         player.sprite.velocityX=8;
         camera.position.x=player.sprite.x+520;
         if(keyIsDown(32)&&player.sprite.y>=height-200){
             player.jump();
             
             
         }
         console.log(player.sprite.x);
     }
     end(){
         //textSize(20);
         //text("GAME OVER",camera.position.x,camera.position.y);
         image(gameoverPic,camera.position.x-300,camera.position.y-200)
         player.sprite.velocityX=0;
         player.sprite.velocityY=0;
         this.virusGroup.destroyEach();
         player.sprite.visible=false;
         this.itemGroup.destroyEach();
         this.house.visible=false;
         this.surveyButton.visible=true;
         this.surveyButton.x=camera.position.x-300;
         this.surveyButton.y=camera.position.y;
         if(mousePressedOver (this.surveyButton)){
            gameState=4;
            this.surveyButton.visible=false;
            form=new Form();
         }
         

     }
        win(){
            image(win,camera.position.x-300,camera.position.y-200,500,500);
            player.sprite.visible=false;
            this.house.visible=false;
         player.sprite.velocityX=0;
         player.sprite.velocityY=0;
         console.log("You Win!");
         this.virusGroup.destroyEach();
         this.itemGroup.destroyEach();
         this.surveyButton.visible=true;
         this.surveyButton.x=camera.position.x-300;
         this.surveyButton.y=camera.position.y;
         if(mousePressedOver (this.surveyButton)){
            gameState=4;
            form=new Form();
            this.surveyButton.visible=false;
         }


        }
     spawnVirus(){
         if(frameCount%10===0){
             var virus=createSprite(this.x,height-100,10,10);
             virus.y=floor(random(height-250,height-100));
             this.x=this.x+900;
             //virus.debug=true;
             var rand=floor(random(1,2.5));
             console.log(rand);
             switch(rand){
                 case 1:virus.addImage(virusPink);virus.scale=0.2;break;
                 case 2:virus.addImage(virusGreen);virus.scale=0.2;break;
                 default:break
                 
             }
             this.virusGroup.add(virus)

         }
     }
     spawnHelpingItems(){
        if(frameCount%90===0){
            var item=createSprite(this.x1,height-100,10,10);
            item.y=floor(random(height-250,height-100));
            this.x1=this.x1+1300;
            //item.debug=true;
            var rand=floor(random(1,2.5));
            console.log(rand);
            switch(rand){
                case 1:item.addImage(sanitizer);item.scale=0.2;break;
                case 2:item.addImage(mask);item.scale=0.1;break;
                default:break
                
            }
            this.itemGroup.add(item);

        }
    }
    timer(){
        if(frameCount%60===0&&this.time>0){
            this.time=this.time-1;
        }
    }

}