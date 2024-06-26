const zod = require("zod");

const createUser = zod.object({
    firstname:zod.string(),
    lastname:zod.string(),
    mobailno:zod.string(),
    gender:zod.string(),
    birthdate:zod.string(),
    username: zod.string(),
    password: zod.string()
})

module.exports = {
    createUser
}