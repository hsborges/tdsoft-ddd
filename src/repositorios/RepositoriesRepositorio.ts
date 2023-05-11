import { Repository } from "../entidades";
import { AbstractRepositorio } from "./AbstractRepositorio";

export class RepositoriesRepositorio extends AbstractRepositorio<Repository> {
  private static instance: RepositoriesRepositorio;

  private constructor() {
    super();
  }

  public static getInstance(): RepositoriesRepositorio {
    if (!RepositoriesRepositorio.instance) {
      RepositoriesRepositorio.instance = new RepositoriesRepositorio();
    }
    return RepositoriesRepositorio.instance;
  }

  async findByName(
    name: string,
    opts?: { limit: number; offset?: number }
  ): Promise<Array<Repository>> {
    let skipCount = 0;

    return Array.from(this.database.values()).reduce(
      (acc: Array<Repository>, repository) => {
        if (opts?.limit && acc.length >= opts.limit) return acc;

        const match = repository
          .get("name_with_owner")
          .toLowerCase()
          .includes(name.toLowerCase());

        if (match && opts?.offset && skipCount++ < opts.offset) return acc;

        return match ? [...acc, repository] : acc;
      },
      []
    );
  }
}
