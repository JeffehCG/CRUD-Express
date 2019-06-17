const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require("./bancoDeDados")

app.use(bodyParser.urlencoded({extended: true})) //transforma a requisição do bory, fazendo um parse e transformando em objetos

//Exibi todos produtos
app.get('/produtos' , (req,res,next) => {
    res.send(bancoDeDados.getProdutos()) //converter para JSON
})

//Exibi produto pelo id na url
app.get('/produtos/:id', (req,res,next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

//salva produto
app.post('/produtos', (req, res,next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//altera produto
app.put('/produtos/:id', (req, res,next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//deleta produto
app.delete('/produtos/:id', (req, res,next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}`)
})
