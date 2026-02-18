

import { getNetSuiteCustomer } from "../services/netsuite.Service.js";x

async function getCustomer (){

try {

// call the Customer function
 const result = await getNetSuiteCustomer();
    logger.info(`Customer Data: ${JSON.stringify(result, null, 2)}`);
    return; // todo remove after testing




    
} catch (error) {
    logger.error (`Error: ${error}`);
    
}





}

export { getCustomer };