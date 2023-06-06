# Summary

## Section 17 - React Hook

- Merupakan fitur baru pada React 16.8 yang memungkinkan kita untuk menggunakan state dan fitur-fitur React lainnya tanpa harus membuat class.
- Hooks dasar adalah useState, useEffect, useContext, dan useReducer.

## Aturan Hooks

- Hanya dapat digunakan pada level teratas, tidak bisa digunakan di dalam kondisi atau loop
- Hanya dapat digunakan pada function component, tidak bisa digunakan pada class component
- Hanya dapat digunakan pada React function, tidak bisa digunakan pada function biasa

## UseState dan UseEffect

- useState adalah hook yang digunakan untuk mengatur state pada functional component dan mengembalikan array yang berisi state dan function untuk mengubah state tersebut.
- useEffect adalah hook yang digunakan untuk mengatur lifecycle pada functional component. useEffect akan dijalankan setelah setiap render.
- useEffect akan menerima function yang akan dijalankan setelah setiap render dan array yang berisi state yang akan dijadikan acuan untuk menentukan apakah useEffect akan dijalankan atau tidak.
- Jika array kosong, maka useEffect akan dijalankan setelah setiap render.
