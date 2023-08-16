const getUser = (req, res) => {
    const user = [
        { id: 1, nome: "Eduardo" },
    ]
    res.json(user)
}

export default getUser