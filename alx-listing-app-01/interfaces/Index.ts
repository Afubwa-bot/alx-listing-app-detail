export interface CardProps {
  title: string;
  imageUrl: string;
  description?: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
 
export interface PropertyAddress {
  name: string;
  address: {
  state: string;
  city: string;
  country: string;
};
rating: number;
category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
}

