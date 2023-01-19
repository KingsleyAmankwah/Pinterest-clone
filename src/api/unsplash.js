import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
  },
});
