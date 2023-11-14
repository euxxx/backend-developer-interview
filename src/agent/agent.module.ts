import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Agent } from './agent.entity'
import { AgentController } from './agent.controller'
import { AgentService } from './agent.service';

@Module({
  imports: [TypeOrmModule.forFeature([Agent])],
  providers: [AgentService],
  controllers: [AgentController],
})
export class AgentModule {}
