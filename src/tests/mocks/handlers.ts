import { graphql } from 'msw';

const requestHandler = graphql.link(import.meta.env.VITE_BASE_URL);

const users = [
  {
    id: 1,
    email: 'john.smith@gmail.com',
    name: 'John Smith',
    password: 'password'
  },
  {
    id: 2,
    email: 'mary.smith@gmail.com',
    name: 'Mary Smith',
    password: 'password'
  },
  {
    id: 3,
    email: 'awesome.email@yahoo.com',
    name: 'Awesome User',
    password: 'helloworld'
  }
];

export const handlers = [
  requestHandler.query('users', (req, res, ctx) => {
    return res(
      ctx.data({
        users
      })
    );
  })
];
