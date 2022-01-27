//Classe abstrata
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._agencia = agencia;
    this._cliente = cliente;
    if (this.constructor == Conta) {
      throw new Error(
        "Não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é um classe abstrata"
      );
    }
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }
  get saldo() {
    return this._saldo;
  }

  //Metodo abstrato
  sacar(valor) {
    throw new Error("O metodo sacar da conta é obstrato");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    } else {
      console.log("impossivel sacar neste momento");
    }

    return 0;
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
