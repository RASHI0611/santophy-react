import makeRequest from './makerequest';

export default function getFeaturedPlaylists() {
  return makeRequest('featured-playlists', 'playlists');
}
