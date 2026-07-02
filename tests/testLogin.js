const fs = require("fs");

const ulookup = require("../utils/ulookup");
const login = require("../utils/login");
const hashPassword = require("../utils/hashPassword");

const users = JSON.parse(
    fs.readFileSync("./data/users.json", "utf8")
);

(async () => {

    console.log(
        "\n========== LOGIN TEST EXECUTION ==========\n"
    );

    let passed = 0;
    let failed = 0;
    let skipped = 0;

    for (const user of users) {

        if (!user.run) {

            console.log(
                `\nSKIPPED - ${user.username}`
            );

            skipped++;

            continue;
        }

        try {

            console.log(
                `\nTesting user: ${user.username}`
            );

            // Step 1 - ULookup

            const lookupResponse =
                await ulookup(user.username);

            if (!lookupResponse.success) {
                throw new Error(
                    "ULookup Failed"
                );
            }

            const sessionId =
                lookupResponse.data.metadata.sessionId;

            if (!sessionId) {
                throw new Error(
                    "Session ID Missing"
                );
            }

            // Step 2 - Hash Password

            const passwordHash =
                hashPassword(
                    user.password
                );

            // Step 3 - Login

            const loginResponse =
                await login(
                    user.username,
                    passwordHash,
                    sessionId
                );

            const actualResult =
                loginResponse.success;

            console.log(
                `Actual Result   : ${actualResult}`
            );

            console.log(
                `Expected Result : ${user.expected}`
            );

            // Step 4 - Validation

            if (
                actualResult ===
                user.expected
            ) {

                if (user.expected) {

                    console.log(
                        `✓ PASS - ${user.username} logged in successfully`
                    );

                    const token =
                        loginResponse.data?.metadata?.tk;

                    if (token) {

                        console.log(
                            "✓ Token Generated"
                        );

                    }

                } else {

                    console.log(
                        `✓ PASS - ${user.username} was correctly rejected`
                    );

                    console.log(
                        `Reason: ${loginResponse.errorData}`
                    );

                }

                passed++;

            } else {

                console.log(
                    `✗ FAIL - Unexpected Result`
                );

                console.log(
                    `Error: ${loginResponse.errorData}`
                );

                failed++;

            }

        } catch (error) {

            console.log(
                `✗ ERROR - ${user.username}`
            );

            console.log(
                error.response?.data?.errorData ||
                error.message
            );

            failed++;

        }

    }

    console.log(
        "\n========== TEST SUMMARY =========="
    );

    console.log(
        `Passed : ${passed}`
    );

    console.log(
        `Failed : ${failed}`
    );

    console.log(
        `Skipped: ${skipped}`
    );

    console.log(
        "==================================\n"
    );

})();