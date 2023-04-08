import { Query, Resolver } from '@nestjs/graphql';
import { ProjectModel } from './model/project.model';

@Resolver(() => ProjectModel)
export class ProjectResolver {
  @Query(() => [ProjectModel])
  async listProjects(): Promise<ProjectModel[]> {
    return Promise.resolve([
      {
        name: 'New car',
      },
    ]);
  }
}
