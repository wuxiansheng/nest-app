import { Column, Entity, ManyToOne, ObjectID, PrimaryGeneratedColumn } from 'typeorm';
import {User} from '../../user/user.entity';

@Entity()
export class Favorites {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  objectid: string;
}
