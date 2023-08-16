const putUser = (req, res) => {
    const dados = req.body

    res.json({
        dados: dados,
        message: "Usuário atualizado com sucesso"
    })
}

export default putUser