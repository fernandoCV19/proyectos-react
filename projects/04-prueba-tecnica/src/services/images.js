export async function getImage(fact) {
  const firstWord = fact.split(' ')[0];
  const res = await fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`);
  const response = await res.json();
  const { url } = response;
  return url;
}