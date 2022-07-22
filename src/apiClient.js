import axios from "axios";
// const url =  "http://localhost:3001/";
const url = "https://graduateapp.herokuapp.com/"; 


export class ApiClient {

  constructor(token, logoutHandler) {
    this.token = token;
    this.logoutHandler = logoutHandler;
  }

  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.token
      },
      data,
    }).catch((error) => {
      console.log("api error" , this.token);
      if(error.response.status == 403) {
        //logout the user
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }      
    });
  }

  apiCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }




  login(userName,password) {
    console.log(userName, password);
    return this.apiCall("post", `${url}auth`, {"userName": userName, "password": password});
  }

  getProfiles() {
    return this.authenticatedCall("get", url);
  }

  getGradProfile(id) {
    console.log(id)
    return this.authenticatedCall("get", `${url}id/${id}`);
  }

  addProfile(userName, courseTitle, fullName, email, contactNumber, city, bio, skills, linkedIn, gitHub, portfolio, employed, image, cv) {
    return this.authenticatedCall("post", url, { userName, courseTitle, fullName, email, contactNumber, city, bio, skills, linkedIn, gitHub, portfolio, employed, image, cv});
  }

  removeProfile(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }

  updateProfile(id, userName, courseTitle, fullName, email, contactNumber, city, bio, skills, linkedIn, gitHub, portfolio, employed, image, cv) {
    return this.authenticatedCall("put", `${url}${id}`, { userName, courseTitle, fullName, email, contactNumber, city, bio, skills, linkedIn, gitHub, portfolio, employed, image, cv});
  }
}
