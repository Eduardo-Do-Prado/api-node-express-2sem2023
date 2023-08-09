import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const user = [
        { id: 1, name: "Eduardo" },
        { id: 2, name: "Luiz" },
        { id: 3, name: "Duds" },
    ]
    res.json(user)
})

router.post('/', (req, res) => {
    const user = [
        { id: 1, name: "Eduardo" },
        { id: 2, name: "Luiz" },
        { id: 3, name: "Duds" },
    ]
    //res.json(user)
    res.json({ message: "Usuário criado com sucesso" })
})

router.put('/', (req, res) => {
    const user = [
        { id: 1, name: "Eduardo" },
        { id: 2, name: "Luiz" },
        { id: 3, name: "Duds" },
    ]
    //res.json(user)
    res.json({ message: "Usuário atualizado com sucesso" })
})

router.delete('/', (req, res) => {
    const user = [
        { id: 1, name: "Eduardo" },
        { id: 2, name: "Luiz" },
        { id: 3, name: "Duds" },
    ]
    //res.json(user)
    res.json({ message: "Usuário deletado com sucesso" })
})


export default router