export interface Store {
  id: string;
  name: string;
  logoUrl: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
  textColor: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  shortDescription: string;
  price: string;
  isFeatured: boolean;
  sizes: Size[];
  colors: Color[];
  images: Image[];
  reviews: Review[];
}

export interface Review {
  id: string;
  firstName: string;
  lastName: string;
  message: string;
  createdAt: string;
  rating?: number;
}
