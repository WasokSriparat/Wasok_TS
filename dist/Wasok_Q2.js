const c1 = {
    id: 1010,
    brand: "BMW",
    color: "pink",
    distanceUsed: 50,
    showCar: () => {
        return "BMW";
    },
    use: (d) => {
        return d;
    }
};
// 2.2
class EuropeCar {
    constructor(id, brand, color, distanceUsed) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.distanceUsed = distanceUsed;
    }
    showCar() {
        return `(${this.brand} ${this.brand} ${this.brand})`;
    }
    use(distance) {
        return this.distanceUsed + distance;
    }
}
// 2.3
const euCar1 = new EuropeCar(1234, "BMW", "Black", 45);
console.log(`Car Brand: ${euCar1.showCar()}`);
console.log(`Distance Use: ${euCar1.use(50)} km.`);
