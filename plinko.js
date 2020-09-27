class Plinko{
    constructor(x, y, radius)
    {
        var options =
        {
          isStatic:true,
          restitution:0.7,
          friction:0.5,
          density:1.2
        }
    
        this.body = Bodies.circle(x, y, radius, options);
         World.add(world, this.body);
         this.radius = radius;
    }
    
    display(){
      var pos = this.body.position;
      fill("brown");
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.radius);
    }
     
    
    
    };