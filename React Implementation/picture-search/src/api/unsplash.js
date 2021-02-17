import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID rLgeCeOY4CLKEE53Q4UaEkQzu3g7DPBnnwitZd1UEJs",
  },
});
