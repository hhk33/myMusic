let BASE_URL = "";
if (import.meta.env.PROD) {
  BASE_URL = "http://localhost:8080";
} else {
  BASE_URL = "http://localhost:8080";
}

export const TIME_OUT = 10000;
export { BASE_URL };
