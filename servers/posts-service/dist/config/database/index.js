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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySqlMicroServicePool = void 0;
const mssql_1 = __importDefault(require("mssql"));
require("dotenv-safe/config");
const config_server = {
    user: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
    server: process.env.DB_SERVER || '',
    options: {
        trustServerCertificate: true,
    },
};
const poolPromise = new mssql_1.default.ConnectionPool(config_server)
    .connect()
    .then(pool => pool)
    .catch(err => {
    console.error('Database connection failed', err);
    throw err;
});
const mySqlMicroServicePool = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield poolPromise;
        const result = yield pool.request().query(query);
        return result;
    }
    catch (error) {
        throw error;
    }
});
exports.mySqlMicroServicePool = mySqlMicroServicePool;
