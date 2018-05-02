import {uniq} from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp'
/* importing User from config and it doesn't need {}s because it's
    a default export, but the others are named exports and need {}s */
import User, {createURL, gravatar, } from './src/user';

const user1 = new User('Steven Mayo', 'jsmayo@ncsu.edu', 'jessemayo.me');

console.log(user1);