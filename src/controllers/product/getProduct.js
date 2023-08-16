const getProduct = ((req, res) => {
    const product = [
        { id: 2, nomeP: "Chuteira" },
    ]
    res.json(product)
})

export default getProduct