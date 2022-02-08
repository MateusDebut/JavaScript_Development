class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false;
            }
        }
        return true
    }
}

class BancoDeDados{

    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(despesa){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(despesa))
        localStorage.setItem('id', id)
    }

    carregarTodosOsRegistros(){
        let id = localStorage.getItem('id')
        let despesas = Array()

        for(let i = 1; i <= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i))
            if(despesa !== null){
                despesa.id = i
                despesas.push(despesa)
            }
        }
        return despesas
    }

    pesquisar(despesa){
        let despesas = Array()
        despesas = this.carregarTodosOsRegistros()
        let despesasFiltradas = Array()

        if(despesa.ano != ''){
            despesasFiltradas = despesas.filter(d => d.ano == despesa.ano)
        }

        if(despesa.mes != ''){
            despesasFiltradas = despesas.filter(d => d.mes == despesa.mes)
        }

        if(despesa.dia != ''){
            despesasFiltradas = despesas.filter(d => d.dia == despesa.dia)
        }

        if(despesa.tipo != ''){
            despesasFiltradas = despesas.filter(d => d.tipo == despesa.tipo)
        }

        if(despesa.descricao != ''){
            despesasFiltradas = despesas.filter(d => d.descricao == despesa.descricao)
        }

        if(despesa.valor != ''){
            despesasFiltradas = despesas.filter(d => d.valor == despesa.valor)
        }

        return despesasFiltradas
       
    }

    remover(id){
        localStorage.removeItem(id)
        window.location.reload()
    }
}

let bancoDeDados = new BancoDeDados()

function cadastrarDespesa(){
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')

    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    efetivaCadastro(despesa)
}

function efetivaCadastro(despesa){
    if(despesa.validarDados()){
        bancoDeDados.gravar(despesa)
        document.getElementById('modal-header').classList.add('text-success')
        document.getElementById('modal_titulo').innerHTML = "Sucesso"
        document.getElementById('modal-body').innerHTML = "Despesa registrada com sucesso"
        document.getElementById('button-modal').classList.add('btn-success')
        document.getElementById('button-modal').innerHTML = "Ok"
        $('#modalGravacao').modal('show')
        

    }else{
        document.getElementById('modal-header').classList.add('text-danger')
        document.getElementById('modal_titulo').innerHTML = "Erro de gravação"
        document.getElementById('modal-body').innerHTML = "Existem campos obrigatórios que não foram preenchidos"
        document.getElementById('button-modal').classList.add('btn-danger')
        document.getElementById('button-modal').innerHTML = "Voltar e preencher"
        $('#modalGravacao').modal('show')
    }
}


function carregaListaDespesas(){
    let despesas = Array()

    despesas = bancoDeDados.carregarTodosOsRegistros()
    var listaDespesas = document.getElementById('listaDespesas')

     despesas.forEach(function(despesa){
        let linha = listaDespesas.insertRow()

        linha.insertCell(0).innerHTML = `${despesa.dia}/${despesa.mes}/${despesa.ano}`
        linha.insertCell(1).innerHTML = ajustarTipo(despesa)
        linha.insertCell(2).innerHTML = despesa.descricao
        linha.insertCell(3).innerHTML = despesa.valor

        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        linha.insertCell(4).append(btn)
        btn.id = despesa.id
        btn.onclick = function(){
            bancoDeDados.remover(this.id)
        }
     })
}

function ajustarTipo(despesa){
    let tipo = despesa.tipo

    switch(parseInt(tipo)){
        case 1:
            return 'Alimentação'
        case 2:
            return 'Educação'
        case 3: 
            return 'Lazer'
        case 4:
            return 'Saúde'
        case 5:
            return 'Transporte'
    }
}

function pesquisarDespesas(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesasFiltradas = Array()

    let novaDespesa = new Despesa(ano, mes, dia, tipo, descricao, valor)
    despesasFiltradas = bancoDeDados.pesquisar(novaDespesa)

    var listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''

    despesasFiltradas.forEach(function(despesa){
        let linha = listaDespesas.insertRow()

        linha.insertCell(0).innerHTML = `${despesa.dia}/${despesa.mes}/${despesa.ano}`
        linha.insertCell(1).innerHTML = ajustarTipo(despesa)
        linha.insertCell(2).innerHTML = despesa.descricao
        linha.insertCell(3).innerHTML = despesa.valor
     })

}

