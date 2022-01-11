// import "./styles.css";

let dummyTransactions = [
  {
    id: 01,
    descricao: "Suite 01",
    valor: 53,
    tipo: "entrada",
    status: "completo",
  },
  {
    id: 02,
    descricao: "Suite 02",
    valor: 47,
    tipo: "entrada",
    status: "pendente",
  },
  {
    id: 03,
    descricao: "Cartão",
    valor: 47,
    tipo: "cartao",
    status: "",
  },
];

function App() {
  this.transacoes = dummyTransactions;
  return {
    msgTeste: "Teste OK!",
    paraMoeda: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
    transacoes,
    entradas() {
      return this.transacoes.filter((transacao) => transacao.tipo == "entrada");
    },
    atualizaBalanco: (arr) => {
      const montante = arr.map((transacao) => transacao.valor);
      const total = montante.reduce(
        (acumulador, valor) => acumulador + valor,
        0
      );
      return total;
    },
    addTransacao(desc, montante, tipo) {
      this.transacoes.push({
        id: this.transacoes.length + 1,
        descricao: desc,
        valor: Number(montante),
        tipo: tipo,
        status: "completo",
      });
    },
  };
}
