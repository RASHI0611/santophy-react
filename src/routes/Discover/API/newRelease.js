import makeRequest from './makerequest';

export default function getNewReleases() {
  return makeRequest('new-releases', 'albums');
}
