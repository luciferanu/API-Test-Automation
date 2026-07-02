/**
 * Test Case:
 * Verify that the Login API rejects authentication
 * requests when the password is sent in plain text
 * instead of the required SHA-256 hash.
 */
const axios = require("axios");
require("dotenv").config();

async function testPlainPassword() {
  // Step 1 - Get Session ID
  const lookupResponse = await axios.post(process.env.BASE_URL, {
    op: "ulookup",
    data: {
      partnerId: process.env.PARTNER_ID,
      tenantId: process.env.TENANT_ID,
      username: "sampleUser",
      gswjdhd: "",
      tt: ""
    }
  });

  const sessionId =
    lookupResponse.data.data.metadata.sessionId;

  console.log("Session ID:", sessionId);

  // Step 2 - Login using plain password
  const loginResponse = await axios.post(
    process.env.BASE_URL,
    {
      op: "up",
      data: {
        partnerId: process.env.PARTNER_ID,
        tenantId: process.env.TENANT_ID,
        username: "sampleUser",
        pass: "SamplePassword123!"
      }
    },
    {
      headers: {
        "x-session-id": sessionId,
        "Content-Type": "application/json"
      }
    }
  );

  console.log(
    JSON.stringify(loginResponse.data, null, 2)
  );
}

testPlainPassword();