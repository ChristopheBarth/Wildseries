import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type category = {
  id: number;
  name: string;
};

class categoryRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await databaseClient.query<Rows>("select * from category");

    // Return the array of category
    return rows as category[];
  }
}

export default new categoryRepository();
