import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Article } from '../article/article.entity';
import { User } from '../../user/user.entity';

@Entity()
export class Comments {

  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(type => User, user => user.article)
  user: User;
  @ManyToOne(type => User, user => user.article)
  author: User;
  @Column()
  body: string;
  @ManyToOne(type => Article, article => article.comments)
  article: Article;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated: Date;
}
