import axios from "axios";

const API_KEY = "51904877-a497cebd24b125b23f704ea34";
const BASE_URL = "https://pixabay.com/api/";


export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  const { data } = await axios.get(BASE_URL, { params });
  return data;
}