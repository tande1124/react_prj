class loginService {
  queryLogin(data) {
    return fetch('mock/loginList.json')
      .then(res => res.json())
      .then(res => {
        const result = res.filter(v => v.userName === data.userName)[0];
        if (result.passWord === data.passWord) {
          return Promise.resolve();
        }
        return Promise.reject();
      });
  }
}

export default new loginService();
