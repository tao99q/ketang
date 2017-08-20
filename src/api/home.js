import * as http from './index';

let url = 'http://localhost:4000';

export function getSliders() {
  return http.get(`${url}/api/getSliders`);
}

export function getLessons(type, limit, offset) {
  return http.get(url + `/api/getLessons/${type}/${limit}/${offset}`);
}