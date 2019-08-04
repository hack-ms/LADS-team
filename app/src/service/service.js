import axios from "axios";

const api = () => {
  let api = axios.create({
    baseURL: "https://api-lads.herokuapp.com/"
  });

  return api;
};

const find = url => {
  return api().get(url);
};

export default find;
