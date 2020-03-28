import axios from 'axios';

const KEY = '14950911-bbc5df412008123c8c9940cf8';

// eslint-disable-next-line import/prefer-default-export
export const fetchImages = (query = '', page = 1) => {
  const BASE_URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return (
    axios
      .get(BASE_URL)
      .then(({ data }) => data.hits)
      // eslint-disable-next-line no-console
      .catch(console.error)
  );
};
