import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import CadastroPet from "../negocio/cadastroPet";
import ListagemPets from "../negocio/ListagemPets";
import ListagemProdutos from "../negocio/listagemProdutos";
import CadastroProduto from "../negocio/cadastroProduto";
import RegistroConsumo from "../negocio/registroConsumo"
import ListagemConsumo from "../negocio/listagemConsumo";


console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar Cliente`);
    console.log(`2 - Listar Todos os Clientes`);
    console.log(`3 - Cadastrar Pet`); 
    console.log(`4 - Listar Todos os Pets`); 
    console.log(`5 - Cadastrar Produto`);
    console.log(`6 - Listar Todos os Produtos`);
    console.log(`7 - Registrar Consumo`);
    console.log(`8 - Listar Top 10 Clientes`); 
    console.log(`9 - Listar Produtos Mais Consumidos`); 
    console.log(`10 - Listar Serviços Mais Consumidos`); 
    console.log(`11 - Listar Clientes que Mais Gastaram`);
    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes);
            cadastroCliente.cadastrar();
            break;
        case 2:
            let listagemClientes = new ListagemClientes(empresa.getClientes);
            listagemClientes.listar();
            break;
        case 3:
            let cadastroPet = new CadastroPet(empresa.getPets);
            cadastroPet.cadastrar();
            break;
        case 4:
            let listagemPets = new ListagemPets(empresa.getPets);
            listagemPets.listar();
            break;
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 7:
            let nomeCliente = entrada.receberTexto(`Informe o nome do cliente para registrar o consumo: `);
            let cliente = empresa.getClientes.find(c => c.nome === nomeCliente);
            if (cliente) {
                let tipoConsumo = entrada.receberNumero(`O que você gostaria de registrar?\n1 - Produto\n2 - Serviço\nEscolha uma opção: `);
                if (tipoConsumo === 1) {
                    let nomeProduto = entrada.receberTexto(`Informe o nome do produto consumido: `);
                    let produto = empresa.getProdutos.find(p => p.nome === nomeProduto);
                    if (produto) {
                        const registroConsumo = new RegistroConsumo(cliente);
                        registroConsumo.registrarProduto(produto);
                    } else {
                        console.log(`Produto não encontrado.`);
                    }
                } else if (tipoConsumo === 2) {
                    let nomeServico = entrada.receberTexto(`Informe o nome do serviço consumido: `);
                    let servico = empresa.getServicos.find(s => s.nome === nomeServico);
                    if (servico) {
                        const registroConsumo = new RegistroConsumo(cliente);
                        registroConsumo.registrarServico(servico);
                    } else {
                        console.log(`Serviço não encontrado.`);
                    }
                } else {
                    console.log(`Opção de consumo não reconhecida.`);
                }
            } else {
                console.log(`Cliente não encontrado.`);
            }
            break;
        case 8:
            let listarTop10 = new ListagemClientes(empresa.getClientes);
            listarTop10.listarTop10Clientes();
            break;
        case 9:
            let listagemConsumoProdutos = new ListagemConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listagemConsumoProdutos.listarProdutosMaisConsumidos();
            break;
        
        case 10:
            let listagemConsumoServicos = new ListagemConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listagemConsumoServicos.listarServicosMaisConsumidos();
            break;
        case 11:
        let listagemValorGasto = new ListagemClientes(empresa.getClientes);
        listagemValorGasto.listarTop5ClientesPorValor();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}