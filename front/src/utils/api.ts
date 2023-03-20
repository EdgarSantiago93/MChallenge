import axios, { AxiosRequestConfig } from 'axios';
import  * as Api from './routes';

const client = axios.create({
  baseURL: Api.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Function to handle common error cases for API requests
function handleRequestError(error: any) {
  if (error.response) {
    console.error('Request failed with status', error.response.status);
  } else if (error.request) {
    console.error('Request failed without response:', error.request);
  } else {
    console.error('Request failed with error:', error.message);
  }
  throw error;
}

export function getUsers() {
  const url = '/users';
  return client.get(url).then(res => res.data).catch(handleRequestError);
}

export function createUser(data: any) {
  const url = '/users';
  return client.post(url, data).then(res => res.data).catch(handleRequestError);
}