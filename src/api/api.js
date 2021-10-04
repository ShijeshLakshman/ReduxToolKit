import axios from 'axios';

const BASE_URL = '';

export const getAxiosInstance = async () => {
  try {
  } catch (e) {
  } finally {
    const instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
      },
    });
    instance.interceptors.request.use(function (config) {
      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    instance.interceptors.response.use(
      (response) =>
        new Promise((resolve, reject) => {
          console.log(response,"response");
          resolve(response);
        }),
      (error) => {
        if (!error.response) {
          console.log(error,"error");
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
        if (error.response.status === 404 || error.response.status === 500) {
            console.log("NETWORK ERROR");
        } else {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      },
    );
    return instance;
  }
};
