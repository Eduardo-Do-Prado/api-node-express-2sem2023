import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const product = [
        { id: 2, nameP: "Chuteira"},
        { id: 1, nameP: "Luva"},
        { id: 3, nameP: "Capacete"},
    ]
    res.json(product)
})


router.post('/', (req, res) => {
    const product = [
        { id: 2, nameP: "Chuteira"},
        { id: 1, nameP: "Luva"},
        { id: 3, nameP: "Capacete"},
    ]
    //res.json(product)
    res.json({ message: "Usuário criado com sucesso" })
})

router.put('/', (req, res) => {
    const product = [
        { id: 2, nameP: "Chuteira"},
        { id: 1, nameP: "Luva"},
        { id: 3, nameP: "Capacete"},
    ]
    //res.json(product)
    res.json({ message: "Usuário atualizado com sucesso" })
})

router.delete('/', (req, res) => {
    const product = [
        { id: 2, nameP: "Chuteira"},
        { id: 1, nameP: "Luva"},
        { id: 3, nameP: "Capacete"},
    ]
    //res.json(product)
    res.json({ message: "Usuário deletado com sucesso" })
})


export default router