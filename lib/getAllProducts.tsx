export default async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) throw new Error("Failed to get the prodcuts");

  return res.json();
}
