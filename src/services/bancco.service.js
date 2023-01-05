import axios from "../config/axios.config";
// import { xml2json } from "xml-js";

export class BanccoService {
  static params = {
    service: "WFS",
    version: "2.0.0",
    request: "GetFeature",
  }

  static features = {
    suggestions: "orleans:suggestions",
    voiries: "orleans:espaces_verts_voirie",
    pav: "orleans:dechets_pav",
  }

  static getFeatureAsList = async (typenames) => {
    return axios
      .get("",
        {
            params: {...this.params, ...{typenames: typenames}} // Le typename est une des 3 features définies dans DataService.features
        })
      .then((response) => {
        const data = JSON.parse(xml2json(response.data, { compact: true, spaces: 2 }));
        return data["wfs:FeatureCollection"]["wfs:member"];
      })
      .catch((error) => {
        console.error(error);
      });
  };

  static getAFeatureById = async (typeName, featureId) => {
    return axios
      .get("",
        {
            params: {...this.params, ...{typeName: typeName, featureId: featureId}} // Le typetypename est une des 3 features définies dans DataService.features
        })
      .then((response) => {
        const data = JSON.parse(xml2json(response.data, { compact: true, spaces: 2 }));
        return data["wfs:FeatureCollection"]["wfs:member"];
      })
      .catch((error) => {
        console.error(error);
      });
  }

  static postASuggestion = async (suggestion, description, coordinateX, coordinateY) => {
    return axios
      .post("")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    }
}
