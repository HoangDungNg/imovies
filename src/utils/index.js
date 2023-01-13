import axios from 'axios'; // for making API call to the Movie Database

// establish the URL for the API call
export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

// ask the user for permission and store the request_token inside the local storage
export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');
    const token = data.request_token;

    if (data.success) {
      localStorage.setItem('request_token', token);
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (err) {}
};

// create a session Id and store the session_id inside the local storage
export const createSessionId = async () => {
  const token = localStorage.getItem('request_token');

  if (token) {
    try {
      const {
        data: { session_id },
      } = await moviesApi.post('authentication/session/new', {
        request_token: token,
      });
      localStorage.setItem('session_id', session_id);
      return session_id;
    } catch (err) {
      console.log(err);
    }
  }
};
