import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import CadastroPet from "../negocio/cadastroPet";
import ListagemPets from "../negocio/ListagemPets";
import ListagemProdutos from "../negocio/listagemProdutos";
import CadastroProduto from "../negocio/cadastroProduto";
import RegistroConsumo from "../negocio/registroConsumo";
import ListagemConsumo from "../negocio/listagemConsumo";
console.log("Bem-vindo ao melhor sistema de gerenciamento de pet shops e cl\u00EDnicas veterinarias");
var empresa = new Empresa();
var execucao = true;
var _loop_1 = function () {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar Cliente");
    console.log("2 - Listar Todos os Clientes");
    console.log("3 - Cadastrar Pet");
    console.log("4 - Listar Todos os Pets");
    console.log("5 - Cadastrar Produto");
    console.log("6 - Listar Todos os Produtos");
    console.log("7 - Registrar Consumo");
    console.log("8 - Listar Top 10 Clientes");
    console.log("9 - Listar Produtos Mais Consumidos");
    console.log("10 - Listar Servi\u00E7os Mais Consumidos");
    console.log("11 - Listar Clientes que Mais Gastaram");
    console.log("0 - Sair");
    var entrada = new Entrada();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastroCliente = new CadastroCliente(empresa.getClientes);
            cadastroCliente.cadastrar();
            break;
        case 2:
            var listagemClientes = new ListagemClientes(empresa.getClientes);
            listagemClientes.listar();
            break;
        case 3:
            var cadastroPet = new CadastroPet(empresa.getPets);
            cadastroPet.cadastrar();
            break;
        case 4:
            var listagemPets = new ListagemPets(empresa.getPets);
            listagemPets.listar();
            break;
        case 5:
            var cadastroProduto = new CadastroProduto(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 6:
            var listagemProdutos = new ListagemProdutos(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 7:
            var nomeCliente_1 = entrada.receberTexto("Informe o nome do cliente para registrar o consumo: ");
            var cliente = empresa.getClientes.find(function (c) { return c.nome === nomeCliente_1; });
            if (cliente) {
                var tipoConsumo = entrada.receberNumero("O que voc\u00EA gostaria de registrar?\n1 - Produto\n2 - Servi\u00E7o\nEscolha uma op\u00E7\u00E3o: ");
                if (tipoConsumo === 1) {
                    var nomeProduto_1 = entrada.receberTexto("Informe o nome do produto consumido: ");
                    var produto = empresa.getProdutos.find(function (p) { return p.nome === nomeProduto_1; });
                    if (produto) {
                        var registroConsumo = new RegistroConsumo(cliente);
                        registroConsumo.registrarProduto(produto);
                    }
                    else {
                        console.log("Produto n\u00E3o encontrado.");
                    }
                }
                else if (tipoConsumo === 2) {
                    var nomeServico_1 = entrada.receberTexto("Informe o nome do servi\u00E7o consumido: ");
                    var servico = empresa.getServicos.find(function (s) { return s.nome === nomeServico_1; });
                    if (servico) {
                        var registroConsumo = new RegistroConsumo(cliente);
                        registroConsumo.registrarServico(servico);
                    }
                    else {
                        console.log("Servi\u00E7o n\u00E3o encontrado.");
                    }
                }
                else {
                    console.log("Op\u00E7\u00E3o de consumo n\u00E3o reconhecida.");
                }
            }
            else {
                console.log("Cliente n\u00E3o encontrado.");
            }
            break;
        case 8:
            var listarTop10 = new ListagemClientes(empresa.getClientes);
            listarTop10.listarTop10Clientes();
            break;
        case 9:
            var listagemConsumoProdutos = new ListagemConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listagemConsumoProdutos.listarProdutosMaisConsumidos();
            break;
        case 10:
            var listagemConsumoServicos = new ListagemConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listagemConsumoServicos.listarServicosMaisConsumidos();
            break;
        case 11:
            var listagemValorGasto = new ListagemClientes(empresa.getClientes);
            listagemValorGasto.listarTop5ClientesPorValor();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
};
while (execucao) {
    _loop_1();
}
