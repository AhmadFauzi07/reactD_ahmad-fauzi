## Praktikum dan screenshot section Redux belum selesai

### SUMMARY

Global State Management

Kapan saat yang tepat untuk menggunakan Redux :

1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

Redux Libraries dan Tools:

1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

Komponen Penting di Redux:

1. Actions
2. Reducer
3. Store

### Redux Thunk

Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.

#### Kenapa perlu Redux Thunk

Untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data
