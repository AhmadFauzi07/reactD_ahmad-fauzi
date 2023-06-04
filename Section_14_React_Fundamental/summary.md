# Summary

## Section 14 - React Fundamental

1.  **JSX** merupakan singkatan dari JavaScript XML, dan ini adalah extension syntax untuk JavaScript. JSX digunakan di React untuk mendeskripsikan seperti apa UI nya akan terlihat. Bentuk dari JSX sendiri mirip seperti JavaScript dan HTML yang digabungkan.

2.  **Elemen pada React :**

    - Komponen diberikan kapital pada huruf pertama.
    - Komponen bawaan dari komponen utama didefinisikan secara lowercase.
    - Pemanggilan komponen harus sesuai dengan casenya.
    - Pemanggilan komponen memiliki 2 cara, yaitu dengan single tag ataupun multiple tag. dengan case ketika single tag tidak memerlukan children, dan multiple ketika memerlukan children.

      ```
      <Component/>
      <Component>ini children</Component>
      ```

    - Komponen tidak boleh return lebih dari satu elemen, harus dibungkus oleh satu parent element.

3.  **Class Component dan Function Component :**
    - Class Component adalah fundamental dari membuat sebuah React App, komponen ini dibuat dari class yang terdiri dari beberapa function yang berguna untuk aplikasi.
    - Class Component membutuhkan kita untuk `extends` ke React.Component dan memakai Render Function untuk memberi `return` sebuah elemen React.
    - Function Component adalah sebuah function murni yang menerima `props` sebagai argumen dan mengembalikan sebuah elemen React(JSX).
    - Function Component tidak bersifat seperti Class Component yang membutuhkan render function `render()`.

```

```
