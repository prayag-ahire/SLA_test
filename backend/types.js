const zod = require("zod");

const createUser = zod.object({
    username:zod.string().optional(),
    password:zod.string().optional()
})

module.exports = {
    createUser
}