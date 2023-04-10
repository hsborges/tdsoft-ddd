import { Stargazer } from "../entidades";
import { RepositoriesRepositorio, ResourcesRepositorio } from "../repositorios";

export class HistoryServico {
  private static instance: HistoryServico;

  private constructor() {}

  public static getInstance(): HistoryServico {
    if (!HistoryServico.instance) {
      HistoryServico.instance = new HistoryServico();
    }
    return HistoryServico.instance;
  }

  async getStargazersByYear(
    id: string
  ): Promise<Array<{ year: number; count: number }>> {
    const repository = await RepositoriesRepositorio.getInstance().read(id);

    if (!repository) throw new Error("Repository not found");

    const stargazers =
      await ResourcesRepositorio.getInstance<Stargazer>().findByRepository(
        repository
      );

    return Object.entries(
      stargazers.reduce((acc, curr) => {
        const year = curr.get("starred_at").getFullYear();
        return acc[year]
          ? { ...acc, [year]: acc[year] + 1 }
          : { ...acc, [year]: 1 };
      }, {} as Record<string, number>)
    ).map(([year, count]) => ({ year: Number(year), count }));
  }
}
