import dotenv = require('dotenv');
dotenv.config();

export const baseUrl = process.env.TEST_BASE_URL;
export const testUser = process.env.TEST_USER;
export const testPass = process.env.TEST_PASS;

export var webDriver = null;
export var timeStart = null;
export var timeEnd = null;