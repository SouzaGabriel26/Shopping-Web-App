import { httpClient } from "../httpClient";

export interface ProductsResponse {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string,
}

export default async function getAll() {
  const { data } = await httpClient.get<ProductsResponse[]>('/products');

  return data;
}