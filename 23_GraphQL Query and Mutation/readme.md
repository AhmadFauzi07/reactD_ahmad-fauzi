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

### Mutation in GraphQL

Pada GraphQL jika kita ingin menambah atau update data di server kita gunakan operasi Mutation.

### Mutation with Apollo Client

1. Import useMutation hooks from apollo client and define mutation

2. Invoke useMutation and using array destruction define mutation handler (insertTodo) and use it

3. refetchQueries: An array (or a function that returns an array) that specifies which queries you want to refetch after the mutation occurs.
   Call insertTodo with variables
