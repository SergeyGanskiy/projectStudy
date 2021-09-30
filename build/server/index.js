"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const models_1 = require("./models");
const Hapi = require('@hapi/hapi');
const routes_1 = require("../server/routes");
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = Hapi.server({
        port: 3010,
        host: 'localhost'
    });
    server.route(routes_1.default);
    server.app.db = models_1.sequelize;
    yield server.start();
    console.log('Server running on %s', server.info.uri);
});
exports.init = init;
//# sourceMappingURL=index.js.map