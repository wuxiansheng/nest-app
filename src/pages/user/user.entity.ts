import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {IsEmail, IsNotEmpty, Validate} from 'class-validator';
import * as crypto from 'crypto';
import { Article } from '../../pages/social/article/article.entity';

@Entity()
export  class  User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: number;
  @Column()
  @IsEmail()
  email: string;
  @Column()
  phone: string;
  @Column({default: ''})
  image: string;
  @Column()
  password: string;
  @BeforeInsert()
  hasPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  @ManyToMany( type => Article)
  @JoinTable()
  favorites: Article[];
  @OneToMany(type => Article, article => article.author)
  article: Article[];
}
