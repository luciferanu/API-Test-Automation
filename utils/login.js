const axios = require("axios");
require("dotenv").config();

async function login(username, passwordHash, sessionId) {

    const response = await axios.post(
        process.env.BASE_URL,
        {
            op: "up",
            data: {
                partnerId: process.env.PARTNER_ID,
                tenantId: process.env.TENANT_ID,
                username: username,
                pass: passwordHash
            }
        },
        {
            headers: {
                "Content-Type": "application/json",
                "x-session-id": sessionId
            }
        }
    );

    return response.data;
}

module.exports = login;