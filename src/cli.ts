import seed from "./seed";
import { HistoryServico } from "./servicos/HistoryServico";

(async () => {
  console.log("Criando dados fakes para teste...");
  await seed();

  console.log("Buscando dados de estrelas por ano...");
  return HistoryServico.getInstance()
    .getStargazersByYear("tdsoft_ddd")
    .then(console.log);
})();
