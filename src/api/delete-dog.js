import { API_CONFIG } from "./config";

export const removeDog = (dogId) => {
  return fetch(API_CONFIG.baseUrl + "/dogs/" + dogId, {
    method: "delete",
  });
};
