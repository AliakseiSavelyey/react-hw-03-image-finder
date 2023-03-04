const API_KEY = '33689458-96d026a39bbfa66b5f5b55deb';
const BASE_URL = 'pixabay.com/api';

export default function fetchImages(image, page = 1) {
  return fetch(
    `https://${BASE_URL}/?q=${image}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => response.json());
}
