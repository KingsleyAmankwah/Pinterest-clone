import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID q2Yl_r9cTaOQPb7IGvylE8mWMuaU6ViYwNV-2XiD6pk",
  },
});
