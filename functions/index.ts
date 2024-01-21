import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  console.log('event', event);
  console.log('context', context);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from my Netlify function with TypeScript!',
    }),
  };
};

export { handler };
