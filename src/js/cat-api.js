import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_7znzDqPdfbDAekb9Tv7801GfFYluT2bezojXe3g99CHmCRwIqge7HiP4oWYfbfdf';

export const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`);
}

export function fetchCatByBreed(breedId) {
  return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`);
}