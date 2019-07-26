import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Article } from '../article/article.entity';

@Entity()
export class Comments {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @ManyToOne(type => Article, article => article.comments)
  article: Article;
}
