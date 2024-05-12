const User = require('../models/user.model')
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

async function signUp() {

    let user = await User.findOne({ email: req.body.email });

    if (user) {
        return res
            .status(400)
            .send("Try any other email, this email is already registered!");
    }

    let userPhone = await User.findOne({ contact: req.body.contact });

    if (userPhone) {
        return res.status(400).send("Number already exists");
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const user = new User({
            ...req.body,
            password: await bcrypt.hash(req.body.password, salt),
        });
        const response = await user.save();
        res.send(_.pick(response, ["firstName", "lastName", "email", "_id", "role"]));
    } catch (ex) {
        res.status(400).send(ex.message);
    }
}
async function login() {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
        return res.status(401).send("This email has not been registered!");
    }

    if (!validPassword) {
        return res.status(401).send("Invalid Credentials!");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
}

async function logout() {

}

module.exports = {
    signUp,
    login,
    logout
}
