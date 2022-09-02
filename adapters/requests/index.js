// Import api call adapter
import { get, post } from '../xhr';

export function getSupportGroups() {
  return get('/support-group/');
}

export function getStates() {
  return get('/states/');
}

export function getOverallprogress() {
  return get('/overall-progress/');
}

export function getStat() {
  return get('/statistcis/');
}

export function getStateDetails(state) {
  return get(`/state-details/${state}/`);
}

export function getCampaignImages(state) {
  return get(`/campaign-images/${state}/`);
}

export function getVillages(state) {
  return get(`/villages/${state}/`);
}

export function getVillage(id) {
  return get(`village-details/${id}/`);
}

export function getVoters(id) {
  return get(`/voters/${id}`);
}

export function getUserVillage(requestData){
  get(`/user-villages`, requestData)
}

//POST REQUESTS
export function addSupportGroup(requestData) {
  post('/support-group/', requestData);
}

export function sendToken(token, config) {
  post(`/token?token=${token}/`, config);
}

export function loginAdmin(requestData){
  post(`/`, requestData)
}

export function addUserVillage(requestData){
  post(`/user-villages`, requestData)
}
