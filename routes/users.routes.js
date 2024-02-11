const { Router } = require('express')
const router = Router()
const { User } = require('../modules/users.model')

let users = []
router.get("/", async (req, res) => {
    try {
        const users = await User.find({})
        res.send({ users })
    } catch (err) {
        res.status(400).send('error')
    }
})

router.post("/register", async (req, res) => {
    const body = req.body
    try {
        const newUser = new User(body)
        await newUser.save()
        res.send({ message: 'user register', data: body })
    } catch (err) {
        console.log(err);
        res.status(400).send('error')
    }
})

router.post("/logIn", async (req, res) => {
    const body = req.body
    try {
        const user = await User.find({ email: body.email, password: body.password })
        res.send({ message: 'hello user', data: user })
    } catch (err) {
        console.log(err);
        res.status(400).send('error')
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id)
        res.send({ message: 'User delete' })
    } catch (err) {
        console.log(err);
        res.status(400).send('error')
    }
});

router.patch("/:id", async (req, res) => {
    const id = req.params.id
    const updateFields = req.body;
    try {
        await User.findByIdAndUpdate(id, updateFields)
        res.send({ message: 'update user' })
    } catch (err) {
        console.log(err);
        res.status(400).send('error')
    }

});

module.exports = router 