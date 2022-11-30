import makeRequest from './makerequest';

export default function getCategories() {
  return makeRequest('categories', 'categories');
}
