import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const product = [
        { id: 2, nomeP: "Chuteira" },
        { id: 1, nomeP: "Luva" },
        { id: 3, nomeP: "Capacete" },
    ]
    res.json(product)
})

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