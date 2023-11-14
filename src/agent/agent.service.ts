import { Injectable } from '@nestjs/common'
import { Agent } from './agent.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(Agent)
    private usersRepository: Repository<Agent>,
  ) {}

  findAll(): Promise<Agent[]> {
    return this.usersRepository.find()
  }

  findOne(id: number): Promise<Agent | null> {
    return this.usersRepository.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
