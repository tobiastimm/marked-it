const FAVICON_SEARCH_ENGINE = 'http://www.google.com/s2/favicons?domain=';

const getHostName = url => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    match !== null &&
    match.length > 2 &&
    typeof match[2] === 'string' &&
    match[2].length > 0
  ) {
    return match[2];
  }
  return null;
};

const getFavicon = url => {
  if (url !== location.hostname) {
    return FAVICON_SEARCH_ENGINE + url;
  }
  return null;
};

export { getFavicon };
