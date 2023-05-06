export default async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) throw new Error("failed to get the product");

  return res.json();
}
