// import base64 from "base-64";
import { create } from "apisauce";
// import qs from "qs";
// import { Alert } from "react-native";

const api = create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

class ApiSauce {
  async post(url, payload, headers) {
    const Header = {
      headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache, private",
        "content-type": "application/json",
        "date": "Mon, 16 Dec 2019 14:41:30 GMT",
        "server": "Apache",
        "status": "200",
        "x-powered-by": "PHP/7.2.25",
        "x-ratelimit-limit": "60",
        "x-ratelimit-remaining": "59"
      }
    };

    const response = await api.post(url, payload, { headers: Header });

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async postWithToken(url, payload, token, headers) {
    const Header = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`
      }
    };

    const response = await api.post(url, payload, Header);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  // for simple get request

  async get(url, data, headers) {
    const token = data && data.access_token && data.access_token;

    api.setHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`
    });
    const response = await api.get(url);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  handlePromise = (resolve, reject, response) => {
    console.log(response, "kkkkkkkkkkkkkkk");

    if (response.ok && response.data && response.originalError === null && response.status === 200) {
      resolve(response.data.data);
    } else {
      if (
        response.originalError &&
        response.originalError.response &&
        response.originalError.response.data &&
        response.originalError.response.data.error_description &&
        response.originalError.response.data.error_description
      ) {
        reject(response.originalError.response.data.error_description);
      } else if (
        response.originalError &&
        response.originalError.response &&
        response.originalError.response.data &&
        response.originalError.response.data.Message &&
        response.originalError.response.data.Message
      ) {
        reject(response.originalError.response.data.Message);
      } else if (
        response.originalError &&
        !response.ok &&
        response.problem === "NETWORK_ERROR"
      ) {
        reject(response.problem);
      }
    }
  };

  // async login(data) {
  //   return new Promise((resolve, reject) => {
  //     db.collection("users")
  //       .doc(data)
  //       .get()
  //       .then(snapshot => {
  //         if (snapshot.data()) {
  //           this.handleFirebasePromise(resolve, reject, snapshot.data());
  //         } else {
  //           this.handleFirebasePromise(resolve, reject, {
  //             error: "Something went wrong"
  //           });
  //         }
  //       })
  //       .catch(err => console.log(err, "errrrrrrrrrrrrrr"));
  //   });
  // }

  // async getCollectionData(data) {
  //   console.log("data", data);
  //   let responseData = [];
  //   let errorMessage = "Document does not exists";
  //   return new Promise((resolve, reject) => {
  //     db.collection(data).onSnapshot(
  //       snapshot => {
  //         snapshot.forEach(doc => {
  //           if (doc.exists) {
  //             responseData.push(doc.data());
  //           } else {
  //             this.handleFirebasePromise(resolve, reject, errorMessage);
  //           }
  //         });
  //         this.handleFirebasePromise(resolve, reject, responseData);
  //       },
  //       error => {
  //         console.log(error, "errorrrrrrrrrrrrrrr");
  //         this.handleFirebasePromise(resolve, reject, error);
  //       }
  //     );
  //   });
  // }

  // handleFirebasePromise = (resolve, reject, response) => {
  //   if (response.email) {
  //     resolve(response);
  //   } else if (response.length) {
  //     resolve(response);
  //   } else {
  //     reject(response.error);
  //   }
  // };
}

export default new ApiSauce();
