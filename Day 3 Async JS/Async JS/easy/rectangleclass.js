//here we are defining a class rectangle => must contain a constructor of it's properties 
class Rectangle { 
    constructor(width, height){
        this.width=width; /* this =>  this is a keyword to declare the attributes inside the constructor and 
                        is used to call the properties of the class when needed */ 
        this.height=height;
    }


    area() {
        const area = this.width * this.height
        return area;
    }
}

// declaring the  object of the class 
const rect = new Rectangle(2, 4)
const area = rect.area();
console.log(area); 