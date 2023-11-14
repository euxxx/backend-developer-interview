import { Controller, Get } from '@nestjs/common'
import { AgentService } from './agent.service'

@Controller('agent')
export class AgentController {
  constructor(private agentService: AgentService) {}

  @Get()
  getAgent() {
    return this.agentService.findAll()
  }
}
