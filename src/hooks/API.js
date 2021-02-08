export default async function fetchResponse(querry) {
  const API_KEY = "AIzaSyC2WetieBVe0NMa52jJ2SYLQQM08z-8clo";
  const CONTEXT_KEY = "0de7cf40735918e10";

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${querry}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }

  const error = new Error('Response not found');
  throw error;
}