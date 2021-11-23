// 2.1
interface Car{
    id:number,
    brand:string,
    color:string,
    distanceUsed:number,
    showCar():string,
    use(distance:number):number
}

const c1:Car = {
    id:1010,
    brand:"BMW",
    color:"pink",
    distanceUsed:50,
    showCar:()=>{
        return "BMW"
    },
    use:(d)=>{
        return d
    }
}

// 2.2
class EuropeCar implements Car{
    id:number;
    brand:string;
    color:string;
    distanceUsed:number

    constructor(id:number,brand:string,color:string,distanceUsed:number){
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.distanceUsed = distanceUsed;
    }

    showCar(){
        return `(${this.brand} ${this.brand} ${this.brand})`;
    }
    use(distance:number){
        return this.distanceUsed + distance;
    }
}

// 2.3
const euCar1:EuropeCar = new EuropeCar(1234,"BMW","Black",45);

console.log(`Car Brand: ${euCar1.showCar()}`);
console.log(`Distance Use: ${euCar1.use(50)} km.`);