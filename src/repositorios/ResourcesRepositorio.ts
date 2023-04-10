import { Release, Repository, Stargazer, Tag, Watcher } from "../entidades";
import { AbstractRepositorio } from "./AbstractRepositorio";

type Resources = Watcher | Stargazer | Tag | Release;

export class ResourcesRepositorio<
  T extends Resources = Resources
> extends AbstractRepositorio<T> {
  private static instance: ResourcesRepositorio;

  private constructor() {
    super();
  }

  public static getInstance<ST extends Resources>(): ResourcesRepositorio<ST> {
    if (!ResourcesRepositorio.instance) {
      ResourcesRepositorio.instance = new ResourcesRepositorio();
    }
    return ResourcesRepositorio.instance as ResourcesRepositorio<ST>;
  }

  async findByRepository(repository: Repository): Promise<T[]> {
    const resources: T[] = [];
    for (const resource of this.database.values()) {
      if (
        (resource as any).get("repository").get("id") === repository.get("id")
      )
        resources.push(resource);
    }
    return resources;
  }
}
