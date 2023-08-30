import { httpClient } from "../httpClient";

export interface ProductsResponse {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string,
}

export default async function getAll(id: string) {
  const { data } = await httpClient.get<ProductsResponse>(`/products/${id}`);

  return data;
}