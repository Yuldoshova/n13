import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  description: string;
}
