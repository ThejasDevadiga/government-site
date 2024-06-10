import axios from "axios";

class CommunicationService {
  axiosInstance;

  constructor() {
    let jwtToken = null;
    if (localStorage.getItem("token")) {
      jwtToken = localStorage.getItem("token");
    }
    this.axiosInstance = axios.create({
      headers: {
        Authorization: "Bearer " + jwtToken? jwtToken : "developemt",
        "Content-Type": "application/json",
      },
    });
    this.axiosInstance.interceptors.request.use(
      (config) => {
          if (config.method === 'options') {
            debugger
              return Promise.resolve({ data: '' });
          }
          return config;
      },
      (error) => {
          return Promise.reject(error);
      }
  );
  }

  async get(url, params, show_alert = true) {
    url = url + "?";
    Object.keys(params).forEach((key) => {
      url = url + key + "=" + params[key] + "&";
    });
    const result = await this.axiosInstance.get(url);
    return result;
  }

  post(url, params, optional={}, show_alert = true) {
    const result = this.axiosInstance.post(url, params, optional);
    
    return result;
  }
}

export default new CommunicationService();
