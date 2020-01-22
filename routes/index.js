const v1 = require("./v1/users", "./v1/sensors", "./v1/measurements");
module.exports = (app) => {
    app.use("/v1", v1);

    // app.use("/v1/users", users);
    // app.use("/v1/sensors", sensors);
    // app.use("/v1/measurements", measurements);
}