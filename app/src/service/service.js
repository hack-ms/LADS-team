import axios from "axios";

const api = () => {
  let api = axios.create({
    baseURL: "http://172.50.4.210:3333/"
  });

  return api;
};

const find = url => {
  return api().get(url);
};

export default find;
