const URI = 'https://resume-66859.firebaseio.com/';
export const api = (url) => fetch(`${URI}/${url}.json`);
