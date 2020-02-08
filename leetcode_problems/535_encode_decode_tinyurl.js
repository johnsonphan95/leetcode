/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var hash = {};

var encode = function(longUrl) {
  let encodedUrl = hashUrl(longUrl);
  hash[encodedUrl] = longUrl;
  return "http://tinyurl.com/" + encodedUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  let key = shortUrl.slice(-6);

  return hash[key];
};

var hashUrl = function(url) {
  let chars = "abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let returnHash = "";

  for (let i = 0; i < 6; i++) {
    returnHash += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return returnHash;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
