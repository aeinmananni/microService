import sql, { IResult, config, query } from 'mssql';
import 'dotenv-safe/config';
const config_server: config = {
  user: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || '',
  server: process.env.DB_SERVER || '',
  options: {
    trustServerCertificate: true,
  },
};

const poolPromise = new sql.ConnectionPool(config_server)
  .connect()
  .then(pool => pool)
  .catch(err => {
    console.error('Database connection failed', err);
    throw err;
  });

export const mySqlMicroServicePool = async <T>(query: string): Promise<IResult<T>> => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(query);

    return result;
  } catch (error) {
    throw error;
  }
};
