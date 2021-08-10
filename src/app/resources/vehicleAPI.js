const SEARCH_API_KEY = 'BNkne13cBor7gdX7Tjp0kbWLcg9eA7XIxY5AIlgw';

export function fetchVehicles() {
  return fetch(`https://developers.ria.com/auto/search?api_key=${SEARCH_API_KEY}` +
    '&category_id=2' +
    '&marka_id%5B0%5D=9' +
    '&state%5B0%5D=7')
    .then(response => response.json())
    .then(({ result }) => result);


}export function fetchOneVehicle(id) {
  return fetch(`https://developers.ria.com/auto/info?api_key=${SEARCH_API_KEY}&auto_id=${id}`)
    .then(response => response.json());
}
