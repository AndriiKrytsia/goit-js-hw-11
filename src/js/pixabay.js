import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
 export let userParams = {
   page: 1,
    per_page: 40,
    q: ''
}


 export async function getPictures(query) {
  const params = new URLSearchParams({
    key: '38627357-1628736c94afded4ff66c6ede',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: false,
    page: userParams.page,
    per_page: userParams.per_page,
   q: userParams.q
  })
  try {
    const URL = BASE_URL + '?' + params;
    const response = await axios.get(URL);
   return response.data;
  } catch (error) {
    console.error(error);
}
}
console.log(getPictures('cat'));

