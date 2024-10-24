import { Injectable } from '@nestjs/common';
import { Car } from './models';

@Injectable()
export class CarService {
  cars: Car[] = [
    { id: 1, brand: 'BMW', price: 200000, color: 'black', year: 2023 },
  ];

  constructor() { }

  getCarList() {
    return this.cars;
  }

  createCar(payload: {
    brand: string;
    price: number;
    color: string;
    year: number;
  }) {
    const newCar = {
      id: this.cars.at(-1).id + 1 || 1,
      ...payload,
    };

    this.cars.push(newCar);

    return newCar;
  }

  getOneCar(id: number) {
    return this.cars.find((c) => c.id == id);
  }

  updateCar(payload: {
    id: number;
    brand?: string;
    price?: number;
    color?: string;
    year?: number;
  }) {

    const car = this.cars.find((c) => c.id == payload.id);

    car.brand = payload.brand
    car.year = payload.year
    car.color = payload.color
    car.price = payload.price

    return car;
  }


  removeCar(id: number) {
    const car = this.cars.find((c) => c.id == id)
    this.cars.splice(1, 1)
    return this.cars.find((c) => c.id == id);
  }
}
