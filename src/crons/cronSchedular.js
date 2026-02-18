import logger from "../utils/logger.js";

import cron from "node-cron";
let isRunning = false;
let counter = 1;