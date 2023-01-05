import axios from "axios";

const instance = axios.create({
  baseUrl: "https://www.jean-daniel.eu:8443/geoserver/wfs",
  timeout: 5000,
});

export default instance;