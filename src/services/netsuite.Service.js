

import axios from "axios";
import OAuth from "oauth-1.0a";
import crypto from "crypto";

export const getNetSuiteCustomer = async () => {
  const url =
    "https://7057913-sb3.suitetalk.api.netsuite.com/services/rest/record/v1/customer?limit=1";

  const oauth = OAuth({
    consumer: {
      key: "4a3ee55ee07614ff87e0b070176fdd1355159f77890476dd7f0f9c3854d81631",
      secret: "c79be0f84a6df5dd1af3a03ae10f39f44f590945dc244dc585d90534a0742e5d",
    },
    signature_method: "HMAC-SHA256",
    hash_function(base_string, key) {
      return crypto
        .createHmac("sha256", key)
        .update(base_string)
        .digest("base64");
    },
  });

  const requestData = {
    url,
    method: "GET",
  };

  const token = {
    key: "50e101929c31dc3810b4142c3507c9ae55b5bf274ba287722546334d4e3aeea4",
    secret: "873ae8f15a8f9e7963501cd6cc2439b7b87e02835d7bb81b3d1676507b9eb5b2",
  };

  const authHeader = oauth.toHeader(
    oauth.authorize(requestData, token)
  );

  const response = await axios.get(url, {
    headers: {
      Authorization: authHeader.Authorization,
      Accept: "application/json",
    },
  });

  return response.data;
};
