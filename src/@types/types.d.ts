export interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}
export interface Item {
  id: string;
  qtd: number;
}

export interface CoffeeInCart extends Coffee {
  qtd: number;
}
