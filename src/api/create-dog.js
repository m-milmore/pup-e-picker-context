import { API_CONFIG } from "./config";

export const createDog = ({ name, description, image }) => {
  const body = JSON.stringify({ name, description, isFavorite: true, image });

  return fetch(API_CONFIG.baseUrl + "/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
};
