import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Agent {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}
