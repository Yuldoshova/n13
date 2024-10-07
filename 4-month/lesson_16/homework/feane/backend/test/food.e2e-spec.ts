import { Category, Food, FoodModule } from "@modules"
import * as request from 'supertest';
import { INestApplication } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { SequelizeModule } from "@nestjs/sequelize"
import { Test } from "@nestjs/testing"
import { Sequelize } from "sequelize-typescript"

describe('Food e2e test', () => {
    let app: INestApplication
    let sequelize: Sequelize
    let file: Express.Multer.File

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    envFilePath: ".env.test"
                }),
                SequelizeModule.forRoot({
                    dialect: 'postgres',
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT),
                    username: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                    models: [Category, Food],
                    autoLoadModels: true,
                    sync: { force: true },
                    logging: false,
                    synchronize: true,
                }),
                FoodModule,
            ],
        })
            .compile();

        app = moduleRef.createNestApplication();
        await app.init();

        sequelize = moduleRef.get<Sequelize>(Sequelize);
    })

    afterAll(async () => {
        await app.close();
        await sequelize.close();
    });

    it("POST create a food", async () => {
        // const fileOptions = await this.#_uploadService.uploadFile({
        //     file: payload.image,
        //     destination: 'uploads/foods',
        //   });

        const testFoodData = {
            name: "Palov",
            description: "Choyxona oshi",
            price: 35000,
            image: "image.jpg",
            category_id: 1
        }

        const responce = await request(app.getHttpServer())
            .post('/foods/add')
            .send(testFoodData)
            .expect(201)

        const food = responce.body;
        expect(food.id).toBeDefined()
        expect(food.name).toEqual('Palov')
        expect(food.description).toEqual('Choyxona oshi')
        expect(food.price).toEqual(35000)
        expect(food.category_id).toEqual(1)
    })

})