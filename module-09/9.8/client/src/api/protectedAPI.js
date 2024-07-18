// Example of using a protected API method that requires a JWT token in the header
import axios from 'axios';

// Example GET request to a protected API endpoint, with authorization token
export async function privateApiExample(token) {
  const url = '/api/private';
  if (!token) {
    throw new Error('token required for protected API route: ' + url);
  }
  return axios.get(url, {
    headers: { Authorization: 'Bearer ' + token },
  });
}

const protectedAPI = {
  privateApiExample,
};
export default protectedAPI;
