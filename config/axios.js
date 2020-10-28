import axios from 'axios';

let baseURL = 'http://192.167.3.12:8088';

let _$axios = axios.create({
  baseURL: baseURL
});

export default _$axios
