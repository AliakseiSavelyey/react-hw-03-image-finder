import axios from 'axios';
import PropTypes from 'prop-types';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=33689458-96d026a39bbfa66b5f5b55deb&q=yellow+flowers&image_type=photo`,
    )
    .then(response => response.data.hits);
};

fetchImagesWithQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default fetchImagesWithQuery;
