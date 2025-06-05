class Circle {
    constructor(radius, color){
        this.radius=radius;
        this.color=color;
    }

    area() {
        const area = this.radius*this.radius*Math.PI;
        return area;
    }

    paint() {
        console.log(`Painting with color ${this.color}`); 

    }
}

const circ = new Circle(2, "black");
const area = circ.area();
console.log("the radius of the circle" + area);