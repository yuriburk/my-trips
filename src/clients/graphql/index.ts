import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_API_URL ?? ''

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_API_TOKEN}`
  }
})

export * from 'clients/graphql/queries'

export default client
