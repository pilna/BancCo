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
            lattitude: point && parseFloat(point["gml:Point"]["gml:pos"].split(" ")[0]),
            longitude: point && parseFloat(point["gml:Point"]["gml:pos"].split(" ")[1]),
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
    .then((response) => {
      const dirtyVoiries = _parseResponse(response)
      const voiries = dirtyVoiries.map((voirie) => {
        return {
          id: voirie["orleans:espaces_verts_voirie"]["@_gml:id"],
          objectid: voirie["orleans:espaces_verts_voirie"]["orleans:objectid"],
          description: voirie["orleans:espaces_verts_voirie"]["orleans:descriptio"],
          coordinate: {
            lattitude: parseFloat(voirie["orleans:espaces_verts_voirie"]["orleans:wkb_geometry"]["gml:Point"]["gml:pos"].split(" ")[0]),
            longitude: parseFloat(voirie["orleans:espaces_verts_voirie"]["orleans:wkb_geometry"]["gml:Point"]["gml:pos"].split(" ")[1]),
          }
        }
      })

      return voiries;
    })
    .catch((error) => {
      console.log("error", error)
    })
}

const getPav = async () => {
  return axios.get(_buildRequestUrl(requestType.PAV))
    .then((response) => {
      const dirtyPavs = _parseResponse(response)
      const pavs = dirtyPavs.map((pav) => {
        return {
          id: pav["orleans:dechets_pav"]["@_gml:id"],
          openHours: pav["orleans:dechets_pav"]["orleans:opening_hours"],
          objectId: pav["orleans:dechets_pav"]["orleans:objectid"],
          defective: pav["orleans:dechets_pav"]["orleans:defective"],
          defectiveDescription: pav["orleans:dechets_pav"]["orleans:defective_description"],
          streetName: pav["orleans:dechets_pav"]["orleans:street_name"],
          postalCode: pav["orleans:dechets_pav"]["orleans:postal_code"],
          city: pav["orleans:dechets_pav"]["orleans:city_name"],
          model: pav["orleans:dechets_pav"]["orleans:modele_colonne"],
          cleaningDays: pav["orleans:dechets_pav"]["orleans:jour_nettoyage"],
          garbageType: pav["orleans:dechets_pav"]["orleans:garbage_types"],
          coordinate: {
            lattitude: parseFloat(pav["orleans:dechets_pav"]["orleans:wkb_geometry"]["gml:Point"]["gml:pos"].split(" ")[0]),
            longitude: parseFloat(pav["orleans:dechets_pav"]["orleans:wkb_geometry"]["gml:Point"]["gml:pos"].split(" ")[1]),
          }
        }
      })
      
      return pavs;
    })
    .catch((error) => (
      error
    ))
}

export const BanccoService = {
  getSuggestions,
  getVoiries,
  getPav,
}