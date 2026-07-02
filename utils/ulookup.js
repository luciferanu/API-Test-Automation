const axios = require("axios");
require("dotenv").config();

async function ulookup(username) {

    const response = await axios.post(
        process.env.BASE_URL,
        {
            op: "ulookup",
            data: {
                partnerId: process.env.PARTNER_ID,
                tenantId: process.env.TENANT_ID,
                username: username,
                gswjdhd: "",
                tt: ""
            }
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    return response.data;
}

module.exports = ulookup;