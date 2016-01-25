import assignToEmpty from './assign';

const request = (url, options = {}) => {
  Object.freeze(options);

  const defaults = {
    method: 'GET',
    credentials: 'include',
    mode: 'cors-with-forced-preflight',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  };

  options = assignToEmpty(defaults, options);

  return fetch(url, options).then(response => {
    if (response.status >= 300) {
      return new Promise((resolve, reject) => response.json().then(reject));
    }

    if (response.status === 204) {
      return new Promise((resolve, reject) => resolve());
    }

    return new Promise((resolve, reject) => resolve(response.json()));
  });
};

export default request;
