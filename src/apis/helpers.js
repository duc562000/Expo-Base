import axios from "axios";

export async function GetData(url, data) {
    let myRequest = {
      method: 'get',
      url,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + token,
      },
      params: {
        ...data,
      },
      timeout: 30 * 1000,
      // withCredentials: true,
    };
    console.log('My request', myRequest);
    return await axios(myRequest)
      .then((response) => response)
      .then((response) => response)
      .catch((error) => {
        console.log(error.request);
        const err = {
          message: 'error',
          status: error.request.status,
        };
        return err;
      });
  }
  export async function PostLogin(url, json) {
    let myRequest = {
      method: 'post',
      url,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 30 * 1000,
      data: JSON.stringify(json),
    };
    console.log('post data mobile', myRequest);
    return await axios(myRequest)
      .then((response) => response)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        const err = {
          message: 'error',
          status: error.request.status,
        };
        return err;
      });
  }