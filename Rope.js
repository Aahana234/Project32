class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 80
        }
        //   this.bodyA = bodyA;
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

attach(body){
    this.rope.bodyA = body;
}              

fly(){
    this.rope.bodyA = null;
}
    display(){
        if(this.rope.bodyA){
            var posA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(posA.x, posA.y, pointB.x, pointB.y);
        
        }

        }
       


}