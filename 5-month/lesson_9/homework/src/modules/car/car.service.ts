import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './models';
import { CreateCarDto, UpdateCarDto } from './dtos';

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

  createCar(payload: CreateCarDto) {
    const newCar = {
      id: this.cars.at(-1).id + 1,
      brand: payload.brand,
      price: payload.price,
      color: payload.color,
      year: payload.year
    }

    this.cars.push(newCar)
    return newCar
  }

  updateCar(payload: UpdateCarDto) {
    const findCar = this.cars.find((car) => car.id == payload.id)
    if (!findCar) {
      throw new NotFoundException("Car not found!")
    }
    findCar.brand = payload.brand
    findCar.price = payload.price
    findCar.color = payload.color
    findCar.year = payload.year
    return findCar
  }

  deleteCar(id: number) {
    const findCar = this.cars.find((car) => car.id == id)
    if (!findCar) {
      throw new NotFoundException("Car not found!")
    }
    this.cars.splice(findCar.id - 1, 1)
    return findCar
  }

}
