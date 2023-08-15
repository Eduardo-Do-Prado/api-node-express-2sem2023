import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const user = [
        { id: 1, nome: "Eduardo" },
        { id: 2, nome: "Luiz" },
        { id: 3, nome: "Duds" },
    ]
    res.json(user)
})

router.post('/', (req, res) => {
    const dados = req.body

    res.json({
        dados: dados,
        message: "Usuário criado com sucesso",
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
    const dados = req.body

    res.json({
        dados: dados,
        message: "Usuário deletado com sucesso" 
    })
})


export default router