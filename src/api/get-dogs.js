import { API_CONFIG } from "./config";

export const getDogs = () => {
  return fetch(API_CONFIG.baseUrl + "/dogs").then((response) =>
    response.json()
  );
};
