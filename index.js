// Your code here
class Cat{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;

        this.speak = () => {
            return `${name} says meow!`
        }
    }

}

class Dog{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;

        this.speak = () => {
            return `${name} says woof!`
        }
    }

}

class Bird{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;

        this.speak = () => {
            if (this.sex === "male") {
                return `It's me! ${name}, the parrot!` 
            } else {
                return `${name} says squawk!`
            }
        }
    }



}