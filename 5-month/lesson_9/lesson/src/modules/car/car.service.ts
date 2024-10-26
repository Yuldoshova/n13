import { Injectable } from '@nestjs/common';
import { Car } from './models';
import { CreateCarDto } from './dtos';

@Injectable()
export class CarService {
  constructor() { }

  cars: Car[] = [
    {
      id: 1,
      brand: "BMW",
      price: 200000,
      color: "black",
      year: 2020
    }
  ]

  getCarList() {
    return this.cars;
  }

  getOneCar(id: number) {
    return this.cars.find((car) => car.id == id)
  }

  async createCar(payload: CreateCarDto) {
    console.log(this.cars.at(-1))
    const newCar = {
      // id: this.cars.at(-1) + 1,
      id: 2,
      brand: payload.brand,
      price: payload.price,
      color: payload.color,
      year: payload.year
    }

    this.cars.push(newCar)
    return newCar
  }
}
