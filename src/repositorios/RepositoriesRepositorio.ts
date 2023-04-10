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

  async findByFullName(full_name: string): Promise<Repository | undefined> {
    for (const repository of this.database.values()) {
      if (
        repository
          .get("name_with_owner")
          .toLowerCase()
          .includes(full_name.toLowerCase())
      )
        return repository;
    }
  }
}
