export interface Restaurant {
  id: number;
  name: string;
  description: string;
  priceRange: string;
  picture: string;
  banner: string;
}

export const restaurants = [
  {
    id: 1,
    name: 'Osaka Sushi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque nibh, volutpat et justo sit amet, ultrices lobortis tellus.',
    priceRange: '20€ to 50€',
    picture: 'sushi.jpg',
    banner: 'sushi-banner.jpg'
  },
  {
    id: 2,
    name: 'Hamburg',
    description: 'Aliquam faucibus, leo quis tincidunt commodo, magna massa vehicula ante, vitae dapibus sem nisl ut augue.',
    priceRange: '8€ to 20€',
    picture: 'burger.jpg',
    banner: 'burger.jpg'
  },
];
