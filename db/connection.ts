import { Sequelize } from "sequelize";

const db = new Sequelize("rest_server_node", "root", "mysql", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
