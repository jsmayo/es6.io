import slug from 'slug';
import { url } from './src/config'
import base64 from 'base-64'

// default (un-named) export
export default function User(name, email, website) {
  return {
    name,
    email,
    website
  }
}


// named exports
export function createURL(name) {
  // url from config.js import
  // function slug() from imported package.
  return  `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
 const hash = base64(email);
 const photoURL = `https://www.gravatar.com/avatar/${hash}`;
}