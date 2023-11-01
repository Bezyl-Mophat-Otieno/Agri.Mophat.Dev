import mssql from "mssql";
import { sqlConfig } from "../config/db-connection.js";

class DB {
  static async executeProcedure(procedureName, data = {}) {
    const pool = await mssql.connect(sqlConfig);
    const request = await pool.request();

    for (let key in data) {
      request.input(key, data[key]);
    }

    const result = request.execute(procedureName);

    return result;
  }
}

export default DB;
