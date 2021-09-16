import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
  user: {
    id: 1,
    name: 'Fabricio Fernando',
    username: 'lucasnhimi',
    email: 'bricio.duarte.fernando@gmail.com',
    avatar: '/images/avatars/avatar_1.jpeg',
  },
});

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== 'bricio.duarte.fernando@gmail.com' || password !== 'admin') {
    return [400, { message: 'Seu e-mail ou senha estão incorretos' }];
  }

  const user = {
    id: 1,
    name: 'Fabricio Fernando',
    username: 'lucasnhimi',
    email: 'bricio.duarte.fernando@gmail.com',
    avatar: '/images/avatars/avatar_1.jpeg',
  };

  return [200, { user }];
});

mock.onGet('/api/home/user/lucasnhimi').reply(200, {
  id: 1,
  name: 'Fabricio Fernando x',
  username: 'lucasnhimi',
  email: 'email@conectadev.com',
  accessToken: 'dadadadadadadad',
  avatar: '/images/avatars/avatar_1.jpeg',
  joinedIn: '06 de janeiro, 2020',
  work: 'Arquiteto de Software',
  totalPost: '388',
});
