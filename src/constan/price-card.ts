export type TCardService = {
  type: string;
  price: string;
  totalService: number;
  services: string[];
};

const services: string[] = [
  'Priority Support',
  'Chat Support',
  'Team Management',
  'Advanced Targeting',
  'Manage Multiple Website',
  'Weekly Meeting For Teams',
  'Account Performance Report',
];

export const cardServices: TCardService[] = [
  {
    type: 'Starter',
    price: '$143',
    totalService: 3,
    services,
  },
  {
    type: 'Premium',
    price: '$352',
    totalService: 5,
    services,
  },
  {
    type: 'Enterprise',
    price: '$463',
    totalService: services.length,
    services,
  },
];
