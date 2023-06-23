/** @type {import('@graphql-codegen/cli').CodegenConfig} */

const baseURL = 'https://expp74jmu7.execute-api.us-east-1.amazonaws.com';

const config = {
  overwrite: true,
  schema: baseURL,
  documents: ['src/**/*.{tsx,ts}', 'src/services/queries.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/__generated/': {
      preset: 'client',
      plugins: []
    }
    // './graphql.schema.json': {
    //   plugins: ['introspection']
    // }
  }
};

module.exports = config;
