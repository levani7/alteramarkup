import axios from "axios";
// import ApiUtils from './ApiUtils';

class NetworkManager {
  static fetch(route, method, body, isFormData) {
    return axios(this._getUrl(route), {
      method,
      headers: this._getHeaders(isFormData),
      data: isFormData ? body : this._getBody(body),
      withCredentials: true,
      credentials: "same-origin",
    })
      .then((response) => {
        // console.log(`Method: ${method}, Route: ${route}, Body: ${body}`);
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  static setToken(token) {
    //Call this function to set token when app is loaded/ after login.
    //this._token = `${token}`;
    localStorage.setItem("user", JSON.stringify(token));
    localStorage.setItem("token", token?.accessToken);
  }

  static updateUser(user) {
    const lsUser = JSON.parse(localStorage.getItem("user")) || {};
    lsUser.user = user;
    localStorage.setItem("user", JSON.stringify(lsUser));
  }

  static _getToken() {
    // return this._token; //Retrieves current token
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const token = params.token;

    if (token) {
      return token;
    }

    const user = JSON.parse(localStorage.getItem("user")) || {};
    return user.accessToken;
  }

  static removeToken() {
    // this._token = null; //Remove token when user log out.
    localStorage.removeItem("user");
  }

  static _getUrl(route) {
    return `${process.env.REACT_APP_API_URL}${route}`;
    // return `http://178.134.212.119:8088/api${route}`;
  }

  static _getHeaders(isFormData, noCache) {
    const contentType = isFormData ? "multipart/form-data" : "application/json";
    const temporaryToken = localStorage.getItem("temporaryToken");
    const currentCommunityId = sessionStorage.getItem("currentCommunityId")
      ? sessionStorage.getItem("currentCommunityId")
      : localStorage.getItem("currentCommunityId")
      ? localStorage.getItem("currentCommunityId")
      : null;

    let headers = {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": contentType,
      Authorization: temporaryToken
        ? "Bearer " + temporaryToken
        : "Bearer " + this._getToken(),
      "Access-Control-Allow-Origin": "*",
      "Role-Id": 3,
      "Building-Id": currentCommunityId,
    };
    if (noCache) {
      headers["Cache-Control"] = "no-cache";
    }
    return headers;
  }

  static _getBody(body, isFormData) {
    return JSON.stringify(body);
  }

  static download(route, type, body, isFormData) {
    return axios(this._getUrl(route), {
      method: type || "GET",
      headers: this._getHeaders(null, "no-cache"), // download needs to disable cache
      data: isFormData ? body : this._getBody(body),
      withCredentials: true,
      credentials: "same-origin",
      responseType: "blob", // Most important detail in this axios declaration
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  static fetchWithConfig(route, method, body, isFormData, config) {
    return axios(this._getUrl(route), {
      method,
      headers: this._getHeaders(isFormData),
      data: isFormData ? body : this._getBody(body),
      withCredentials: true,
      credentials: "same-origin",
      ...config,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default NetworkManager;
