import ky from "ky-universal";

async function fetchAPI(url) {
  const res = await ky(url);

  return res.json();
}

export { fetchAPI };
