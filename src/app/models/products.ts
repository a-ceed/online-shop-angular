export interface IProducts {
id: number,
title: string,
year: number,
price: number,
image?: string,
configure: IProductsConfig;
quantity: number;
}

export interface IProductsConfig {
  chip: string,
  SSD: string,
  memory: string,
  display: string,
}
