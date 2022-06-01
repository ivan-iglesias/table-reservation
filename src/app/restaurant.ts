export interface Restaurant {
    id: number;
    name: string;
    description: string;
    picture: string;
  }

  export const restaurants = [
    {
      id: 1,
      name: 'Osaka Sushi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque nibh, volutpat et justo sit amet, ultrices lobortis tellus.',
      picture: 'sushi.jpg'
    },
    {
      id: 2,
      name: 'Hamburg',
      description: 'Aliquam faucibus, leo quis tincidunt commodo, magna massa vehicula ante, vitae dapibus sem nisl ut augue.',
      picture: 'burger.jpg'
    },
  ];
