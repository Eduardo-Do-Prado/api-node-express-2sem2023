import user from '../../Models/userModel.js'

const postUser = async (req, res) => {
    try {
        const user = req.body
        const res = await user.create(user)
        console.log(res)
        const [result] = res
        if (result.affectedRows === 1) {
            res.status(201).json({
                message: 'Usuário criado',
                user: {
                    id: result.insrtId,
                    ...user
                }
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}

export default postUser