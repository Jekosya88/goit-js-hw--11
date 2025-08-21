import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_key = "51904877-a497cebd24b125b23f704ea34";

export async function getImagesByQuery(query) {
  const params = {
    key: API_key,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  const { data } = await axios.get(BASE_URL, { params });
  return data;
}