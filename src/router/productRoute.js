import express from 'express'
import listProducts from  '../controllers/product/listProducts.js'
import getProduct from  '../controllers/product/getProduct.js'

const router = express.Router()

router.get('/', getProduct)

router.get('/list', listProducts)

router.post('/', (req, res) => {
    const dados = req.body

    res.json({
        dados: dados,
        message: "Usuário criado com sucesso"
    })
})

router.put('/', (req, res) => {
    const dados = req.body

    res.json({
        dados: dados,
        message: "Usuário atualizado com sucesso"
    })
})

router.delete('/', (req, res) => {
    const product = [
        { id: 2, nomeP: "Chuteira" },
        { id: 1, nomeP: "Luva" },
        { id: 3, nomeP: "Capacete" },
    ]
    //res.json(product)
    res.json({ message: "Usuário deletado com sucesso" })
})


export default router