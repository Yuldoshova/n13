import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'bigint', nullable: false })
  price: number;


  @Column({type: 'integer'})
  rating: number


  @Column({type: 'integer'})
  categoryId: number
}

