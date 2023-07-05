import NetworkManager from "./Network";

function resolveQueryParams(params) {
  return Object.keys(params)
    .map((k) =>
      Array.isArray(params[k])
        ? params[k]
            .map((a) => `${encodeURIComponent(k)}[]=${encodeURIComponent(a)}`)
            .join("&")
        : `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
    )
    .join("&");
}

export default class AppAPI {
  static get(route, queryParams) {
    let finalRoute = route;
    if (queryParams) {
      finalRoute += `?${resolveQueryParams(queryParams)}`;
    }
    return NetworkManager.fetch(finalRoute, "GET");
  }

  static put(route, body) {
    return NetworkManager.fetch(route, "PUT", body);
  }

  static post(route, body) {
    return NetworkManager.fetch(route, "POST", body);
  }

  static delete(route, body) {
    return NetworkManager.fetch(route, "DELETE", body);
  }

  static postFile(route, body) {
    return NetworkManager.fetch(route, "POST", body, true);
  }

  static download(route, body, isFormData) {
    return NetworkManager.download(route, "GET", body, isFormData);
  }
  static postFileWithConfig(route, body, config) {
    return NetworkManager.fetchWithConfig(route, "POST", body, true, config);
  }
}
