import { Request, Response } from "express";
import { RepositoriesRepositorio } from "../../repositorios";

class RepositoriesController {
  async get(req: Request, res: Response) {
    const { id } = req.params;
    res.json(
      await RepositoriesRepositorio.getInstance()
        .read(id)
        .then((repo) => {
          const props = repo?.props;
          return { ...props, owner: props?.owner?.props };
        })
    );
  }

  async find(req: Request, res: Response) {
    const { nome, pagina, por_pagina } = req.query;

    const limit = por_pagina ? parseInt(por_pagina as string) : 10;
    const offset = pagina ? (parseInt(pagina as string) - 1) * limit : 0;

    const repos = await RepositoriesRepositorio.getInstance().findByName(
      nome as string,
      { limit, offset }
    );

    res.json(
      repos.map((repo) => ({
        id: repo.get("id"),
        name_with_owner: repo.get("name_with_owner"),
      }))
    );
  }
}

export default new RepositoriesController();
