class Apple {
    constructor(x,y,r){
    
            var options={
                isStatic:true,
                restitution:0,
                friction:1,
            }
            
        this.x= x ;
        this.y= y;
        this.r= r;
        this.body=Bodies.circle(this.x, this.y,this.r/2,options);
            World.add(world,this.body);
    
        this.image = loadImage("Sprites/AppleImage.png");
        }
    
    display()
     {
         var paperpos=this.body.position;
         var angle = this.body.angle;
         push()
         translate(paperpos.x,paperpos.y);
         rotate(angle);
        
         strokeWeight(3);
         fill(255,0,255);  
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
       
        pop()
         }
        
    
    }
    