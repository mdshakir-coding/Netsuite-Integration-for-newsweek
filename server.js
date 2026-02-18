import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import logger from "./src/utils/logger.js";
import "./src/crons/cronSchedular.js";


import { getCustomer } from "./src/controller/customers.js"; 


logger.info("Loaded API Token:", process.env.HUBSPOT_API_KEY);
const PORT = process.env.PORT || 3600;

app.listen(PORT, () => {

    getCustomer();

 
    logger.info(`Server running on port ${PORT}`);
});

