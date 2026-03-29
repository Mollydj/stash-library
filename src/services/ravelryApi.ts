export async function getYarns(query: string) {
  const res = await fetch(`/api/yarns?query=${query}`);
  return res.json();
}