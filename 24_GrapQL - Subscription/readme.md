# Praktikum Belum selesai

### Summary

### What is GraphQL

GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL minimizes the amount of data that needs to be transferred over the network. With graphQL we can use one single endpoint ( /graphQL ) for any requests needed.

### GraphQL Core Features

Before we can do GraphQL then we need to setup GraphQL Server (Backend), you can use Hasura, Apollo Server or others to do that. Then we can use GraphQL on client either using Prisma, Apollo Client, Postman, etc.

### There are 3 main features in GraphQL client:

1. Query, get data based on specific query that we define
2. Mutation, insert, update, delete data
3. Subscription, get updated date realtime / based on events

### Subscription

1. Install subscriptions-transport-ws to enable websocket connection
   yarn add @apollo/client subscriptions-transport-ws
2. Import all needed modules and separate between http and websocket link

3. Create httpLink for query and mutation. And wsLink for subscription. Add header for authentication. Get this link from your hasura console. WsLink use wss:// instead of https:// because wsLink use websocket.. Note that wss is more secure than ws, just like https is more secure than http.

4. Add split function and use as link when create client. Split function used to combine those two Links into a single Link that uses one or the other according to the type of operation being executed . When operation is equal subscription then use wsLink, if not then use httpLink for query and mutation

### Subscription using useSubscription

Import useSubscription from apollo client and define subscription
