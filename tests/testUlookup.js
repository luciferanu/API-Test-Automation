const ulookup = require("../utils/ulookup");

(async () => {
    try {

        const result = await ulookup("sampleuser");

        console.log(
            JSON.stringify(result, null, 2)
        );

    } catch (error) {

        console.error("Test Failed");

    }
})();