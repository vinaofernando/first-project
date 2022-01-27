import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Vinicius", 10000, 47785240);
const gerente = new Gerente("luiz", 5000, 47765410);

gerente.cadastrarSenha("123");
diretor.cadastrarSenha("123456");

const cliente = new Cliente("luizin", 45698785, "456");
const DiretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const GerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const ClienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(GerenteEstaLogado, DiretorEstaLogado, ClienteEstaLogado);
