import { XMLParser } from "fast-xml-parser";
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

const _parseResponse = (response) => {
  const parser = new XMLParser({
    ignoreAttributes: false,
  });
  const parsed = parser.parse(response.data);
  return parsed["wfs:FeatureCollection"]["wfs:member"];
}

const getSuggestions = async () => {
  return axios.get(_buildRequestUrl(requestType.SUGGESTIONS))
    .then((response) => {
      const dirtySuggestions = _parseResponse(response)
      const suggestions = dirtySuggestions.map((suggestion) => {
        const point = suggestion["orleans:suggestions"]["orleans:wkb_geometry"];
        return {
          id: suggestion["orleans:suggestions"]["@_gml:id"],
          type: suggestion["orleans:suggestions"]["orleans:type"],
          description: suggestion["orleans:suggestions"]["gml:description"],
          coordinate: {
            lattitude: point && point["gml:Point"]["gml:pos"].split(" ")[0],
            longitude: point && point["gml:Point"]["gml:pos"].split(" ")[1],
          }
        }
      })

      return suggestions;
    })
    .catch((error) => {
      console.log("error", error)
    })
}

const getVoiries = async () => {
  return axios.get(_buildRequestUrl(requestType.VOIRIES))
    .then((response) => (
      _parseResponse(response)
    ))
    .catch((error) => {
      console.log("error", error)
    })
}

const getPav = async () => {
  return axios.get(_buildRequestUrl(requestType.PAV))
    .then((response) => (
      _parseResponse(response)
    ))
    .catch((error) => (
      error
    ))
}

export const BanccoService = {
  getSuggestions,
  getVoiries,
  getPav,
}