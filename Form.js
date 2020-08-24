class Form{
    constructor(){
        this.thx=createSprite(width/2,height/2+200);
        this.thanks=loadImage("images/thx.png");
        this.thx.addImage(this.thanks);
        this.thx.visible=false;
        this.greeting=createSprite(width/2,height/2-100);
        this.greetingImg=loadImage("images/greeting.png");
        this.greeting.addImage(this.greetingImg);
        this.greeting.visible=false;
        
        this.thx.scale=0.5;
    

        this.submitButton=createButton("Submit")
        this.submitButton.position(width/2,600);

        this.heading=createElement("h1")
        this.Q1=createElement('h3');
        this.Q2=createElement('h3');
        this.Q3=createElement('h3');
        this.Q4=createElement('h3');

        this.radio1=createRadio('h3')
        this.radio1.position(100,200);
        this.radio1.option('yes');
        this.radio1.option('no');

        this.radio2=createRadio('h3')
        this.radio2.position(100,300);
        this.radio2.option('Fever');
        this.radio2.option('Dry Cough');
        this.radio2.option('Tiredness/headache');
        this.radio2.option('Shortness of breath');
        this.radio2.option('None of these');
        
        this.specificationsInput=createInput("Others,please specify");
        this.specificationsInput.position(100,325);

        this.radio3=createRadio('h3')
        this.radio3.position(100,400);
        this.radio3.style("width","150px");
        this.radio3.option('I was in contact with a covid-19 patient',1);
        this.radio3.style("width","290px");
        this.radio3.option('I am a health care worker and I was exposed to a Covid-19 pateint without gear.',2);
        this.radio3.option('None of these',3);

         this.radio4=createRadio('h3')
         this.radio4.position(100,550);
         this.radio4.option('yes');
         this.radio4.option('no');

        this.nameInput=createInput("Name(Edit Name)");
        this.nameInput.position(40,100);

        this.addressInput=createInput("Address(Edit address)");
        this.addressInput.position(330,100);

        this.emailInput=createInput(" e-mail(Edit e-mail)");
        this.emailInput.position(600,100);

        this.familyInput=createInput("Number of family members");
        this.familyInput.position(850,100)
    }
    
    display(){
        this.Q1.html("Q1.Have you traveled abroad in the past month?");
        this.Q1.position(50,150);
        this.heading.html("Survey");
        this.heading.position(width/2-50,10);
        this.Q2.html("Q2.Please select the option(s) that apply to you");
        this.Q2.position(50,250)
        this.Q3.html("Q3.Which of the following apply to you?");
        this.Q3.position(50,350);
         this.Q4.html("Q4.Travel?");
         this.Q4.position(50,500);
        this.submitButton.mousePressed(()=>{
        this.thx.visible=true;
        this.thx.x=camera.position.x
        this.thx.y=camera.position.y+200;
            this.greeting.visible=true;
            this.greeting.x=camera.position.x
            this.greeting.y=camera.position.y-100;
            this.Q1.hide();
            this.Q2.hide();
            this.Q3.hide();
            this.Q4.hide();
            this.radio1.hide();
            this.radio2.hide();
            this.radio3.hide();
            this.radio4.hide();
            this.emailInput.hide();
            this.nameInput.hide();
            this.addressInput.hide();
            this.familyInput.hide();
            this.heading.hide();
            this.specificationsInput.hide();
            this.submitButton.hide();
            database.ref('userData').update({
                email:this.emailInput.value(),
                name:this.nameInput.value(),
                family:this.familyInput.value(),
                address:this.addressInput.value(),
                Q1:this.radio1.value(),
                Q2:this.radio2.value(),
                Q3:this.radio3.value(),
                Q4:this.radio4.value(),
                specificSymptoms:this.specificationsInput.value()
                
                

            })

        })
    }
}