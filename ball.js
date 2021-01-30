class Ball {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'friction':1.0,
          'density':1.0,
          isStatic:false
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);   
      //ellipseMode(CENTER);
      strokeWeight(4)
      stroke("purple")
      fill("pink");
     // ellipse(56,46,85);
      circle(pos.x,pos.y,this.radius)
      pop();
    }
  };