import { getFavicon } from '../faviconApi';

describe('getFavicon', () => {
  beforeAll(() => {
    global.location = {
      hostname: 'http://localhost'
    };
  });

  it('should combine the given URL with the google service url', () => {
    const bookmarkUrl = 'http://myBookmark.com';
    expect(getFavicon(bookmarkUrl)).toEqual(
      `http://www.google.com/s2/favicons?domain=${bookmarkUrl}`
    );
  });
});
