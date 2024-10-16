import { Column, Table,DataType, Model } from "sequelize-typescript";

@Table({tableName: 'category',timestamps: true})
export class Category extends Model{
    @Column({type: DataType.TEXT,allowNull: false})
    name: string

}
