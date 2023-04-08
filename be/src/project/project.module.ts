import { Module } from '@nestjs/common';
import { PortfolioModule } from '@/portfolio/portfolio.module';
import { ProjectResolver } from './project.resolver';
import { ProjectService } from './project.service';

@Module({
  imports: [PortfolioModule],
  providers: [ProjectResolver, ProjectService],
})
export class ProjectModule {}
