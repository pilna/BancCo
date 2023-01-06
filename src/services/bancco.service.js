import axios from "axios";

const defaultOptions = {
  service: "WFS",
  version: "2.0.0",
  request: "GetFeature",
}

const requestType = {
  SUGGESTIONS: "orleans:suggestions",
  VOIRIES: "orleans:espaces_verts_voirie",
  PAV: "orleans:dechets_pav",
}

const baseUrl = `https://www.jean-daniel.eu:8443/geoserver/wfs`;

const _buildUrlWithOptions = (options = {}) => {
  const optionsToUse = {
    ...defaultOptions,
    ...options,
  }

  return baseUrl + "?" + Object.keys(optionsToUse).map((key) => (
    `${key}=${optionsToUse[key]}`
  )).join("&")
}

const _buildRequestUrl = (requestType, options) => {
  return _buildUrlWithOptions(options) + `&typeName=${requestType}`;
}

const getSuggestions = async () => {
  return axios.get(_buildRequestUrl(requestType.SUGGESTIONS))
    .then((response) => (
      console.log("suggestions", response.data)
    ))
    .catch((error) => {
      console.log("error", error)
    })
}

const getVoiries = async () => {
  return axios.get(_buildRequestUrl(requestType.VOIRIES))
    .then((response) => (
      console.log("voiries", response.data)
    ))
    .catch((error) => {
      console.log("error", error)
    })
}

const getPav = async () => {
  return axios.get(_buildRequestUrl(requestType.PAV))
    .then((response) => (
      console.log("pav", response.data)
    ))
    .catch((error) => {
      console.log("error", error)
    })
}

export const BanccoService = {
  getSuggestions,
  getVoiries,
  getPav,
}