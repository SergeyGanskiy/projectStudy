import {sequelize} from "./models";

const Hapi = require('@hapi/hapi');
import routes from '../server/routes'

export const init = async ()=> {
    const server = Hapi.server({
        port: 3010,
        host: 'localhost'
    });
    server.route(routes);
    server.app.db = sequelize;
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

