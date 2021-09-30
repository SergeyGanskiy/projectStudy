"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Students_1 = require("./Students");
exports.sequelize = new sequelize_typescript_1.Sequelize('postgres://sergey:123QWE123@localhost:5432/first', {
    dialect: "postgres",
    models: [Students_1.Students]
});
exports.sequelize.sync();
//# sourceMappingURL=index.js.map