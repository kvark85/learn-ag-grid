const SEARCH_API_KEY = 'BNkne13cBor7gdX7Tjp0kbWLcg9eA7XIxY5AIlgw';

const fetchMarks = (markaId) => {
  const requestString = `https://developers.ria.com/auto/categories/` +
    `${markaId}/marks?api_key=${SEARCH_API_KEY}`;

  return fetch(requestString)
    .then(response => response.json());
}

const fetchVehicles = (categoryId, selectedMarks) => {
  const markaSubstring = selectedMarks.reduce((memo, marka, index) => {
    return memo + `&marka_id[${index}]=${marka.value}&model_id[${index}]=0`;
  }, '');

  const requestString = `https://developers.ria.com/auto/search?api_key=${SEARCH_API_KEY}` +
    `&category_id=${categoryId}` +
    markaSubstring +
    '&state[0]=7' +
    '&city[0]=0' +
    '&countpage=100';

  return fetch(encodeURI(requestString))
    .then(response => response.json())
    .then(({ result }) => result);
}

const fetchOneVehicle = (id) => {
  return fetch(`https://developers.ria.com/auto/info?api_key=${SEARCH_API_KEY}&auto_id=${id}`)
    .then(response => response.json());
}

const api = {
  fetchMarks,
  fetchVehicles,
  fetchOneVehicle,
};

export default api;
