const listProducts = (req, res) => {
    const product = [
        { id: 1, nome: "Capacete" },
        { id: 2, nome: "Chuteira" },
        { id: 3, nome: "Luva" },
    ]
    res.json(product)
}

export default listProducts