const deleteUser =  (req, res) => {
    const dados = req.body

    res.json({
        dados: dados,
        message: "Usuário deletado com sucesso" 
    })
}

export default deleteUser