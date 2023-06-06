# Summary

#### Folder ini berisi tugas Introduction GraphQL and Apollo Client Setup, Query and mutation with Apollo Client dan GraphQL – Subscription

## Introduction to GraphQL and Apollo Client Setup

### GraphQL

GraphQL adalah bahasa query untuk API yang dikembangkan oleh Facebook. Dengan GraphQL, klien dapat menentukan struktur data yang dibutuhkan, dan server hanya akan memberikan data yang diminta oleh klien. GraphQL memiliki beberapa karakteristik utama, yaitu: typed schema, single endpoint, declarative query language, dan hierarchical. GraphQL telah banyak digunakan dalam pengembangan aplikasi web modern karena memudahkan pengembang untuk mengelola permintaan API dan mempercepat kinerja aplikasi.

### Apollo Client

Apollo Client adalah library JavaScript yang memungkinkan klien untuk mengakses data dari GraphQL server. Apollo Client menyediakan fitur-fitur seperti caching, state management, dan integrasi dengan React. Apollo Client dapat digunakan dengan React, React Native, Angular, dan Vue.

### Apollo Client Setup

Untuk menginstall Apollo Client, jalankan perintah berikut pada terminal:

```bash
npm install @apollo/client graphql
```

Setelah itu, buat file `index.js` pada folder `src` dan tambahkan kode berikut:

```javascript
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

export default client;
```

## Query and mutation with Apollo Client

### Query

Query adalah operasi yang digunakan untuk mengambil data dari GraphQL server. Untuk membuat query, kita dapat menggunakan hook `useQuery` dari Apollo Client. Hook `useQuery` menerima dua parameter, yaitu query dan variabel. Parameter query merupakan query yang akan dieksekusi, dan parameter variabel merupakan variabel yang akan digunakan pada query. Berikut adalah contoh penggunaan hook `useQuery`:

```javascript
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries";

const { loading, error, data } = useQuery(GET_COUNTRIES);
```

### Mutation

Mutation adalah operasi yang digunakan untuk mengubah data pada GraphQL server. Untuk membuat mutation, kita dapat menggunakan hook `useMutation` dari Apollo Client. Hook `useMutation` menerima dua parameter, yaitu mutation dan variabel. Parameter mutation merupakan mutation yang akan dieksekusi, dan parameter variabel merupakan variabel yang akan digunakan pada mutation. Berikut adalah contoh penggunaan hook `useMutation`:

```javascript
import { useMutation } from "@apollo/client";
import { ADD_COUNTRY } from "../graphql/mutations";

const [addCountry] = useMutation(ADD_COUNTRY);
```

### Fetching data

Untuk mengambil data dari GraphQL server, kita dapat menggunakan hook `useQuery` dari Apollo Client. Hook `useQuery` menerima dua parameter, yaitu query dan variabel. Parameter query merupakan query yang akan dieksekusi, dan parameter variabel merupakan variabel yang akan digunakan pada query. Berikut adalah contoh penggunaan hook `useQuery`:

```javascript
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries";

const { loading, error, data } = useQuery(GET_COUNTRIES);
```

## GraphQL – Subscription

### Subscription

Subscription adalah operasi yang digunakan untuk mendapatkan data secara real-time dari GraphQL server. Untuk membuat subscription, kita dapat menggunakan hook `useSubscription` dari Apollo Client. Hook `useSubscription` menerima dua parameter, yaitu subscription dan variabel. Parameter subscription merupakan subscription yang akan dieksekusi, dan parameter variabel merupakan variabel yang akan digunakan pada subscription. Berikut adalah contoh penggunaan hook `useSubscription`:

```javascript
import { useSubscription } from "@apollo/client";
import { COUNTRY_ADDED } from "../graphql/subscriptions";

const { loading, error, data } = useSubscription(COUNTRY_ADDED);
```

### Fetching data

Untuk mengambil data dari GraphQL server, kita dapat menggunakan hook `useSubscription` dari Apollo Client. Hook `useSubscription` menerima dua parameter, yaitu subscription dan variabel. Parameter subscription merupakan subscription yang akan dieksekusi, dan parameter variabel merupakan variabel yang akan digunakan pada subscription. Berikut adalah contoh penggunaan hook `useSubscription`:

```javascript
import { useSubscription } from "@apollo/client";
import { COUNTRY_ADDED } from "../graphql/subscriptions";

const { loading, error, data } = useSubscription(COUNTRY_ADDED);
```

### Adding data

Untuk menambahkan data ke GraphQL server, kita dapat menggunakan hook `useMutation` dari Apollo Client. Hook `useMutation` menerima dua parameter, yaitu mutation dan variabel. Parameter mutation merupakan mutation yang akan dieksekusi, dan parameter variabel merupakan variabel yang akan digunakan pada mutation. Berikut adalah contoh penggunaan hook `useMutation`:

```javascript
import { useMutation } from "@apollo/client";
import { ADD_COUNTRY } from "../graphql/mutations";

const [addCountry] = useMutation(ADD_COUNTRY);
```
