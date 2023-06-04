// Array untuk menyimpan data produk
let products = [];

// Fungsi untuk menampilkan produk pada tabel
function displayProducts() {
  const productList = document.getElementById("product-list");

  // Menghapus semua data produk yang sebelumnya ditampilkan
  while (productList.firstChild) {
    productList.firstChild.remove();
  }

  // Menambahkan data produk ke dalam tabel
  products.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>
          ${product.image}
        </td>
        <td>${product.freshness}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>
          <button onclick="deleteProduct(${index})">Delete</button>
        </td>
      `;
    productList.appendChild(row);
  });
}

// Fungsi untuk menambah produk
function addProduct(event) {
  event.preventDefault();

  const productName = document.getElementById("productName").value;
  const productCategory = document.getElementById("productCategory").value;
  const productImage = document.getElementById("productImage").value;
  const productFreshness = document.getElementById("productFreshness").value;
  const productDescription =
    document.getElementById("productDescription").value;
  const productPrice = document.getElementById("productPrice").value;

  // Membuat objek produk baru
  const product = {
    name: productName,
    category: productCategory,
    image: productImage,
    freshness: productFreshness,
    description: productDescription,
    price: productPrice,
  };

  // Menambahkan produk ke array
  products.push(product);

  // Menampilkan produk pada tabel
  displayProducts();

  // Mengosongkan form
  document.getElementById("productForm").reset();
}

// Fungsi untuk menghapus produk
function deleteProduct(index) {
  // Menghapus produk dari array
  products.splice(index, 1);

  // Menampilkan produk pada tabel
  displayProducts();
}

// Fungsi untuk mencari produk berdasarkan nama
function searchProduct() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput)
  );

  // Menampilkan produk yang sesuai dengan hasil pencarian
  displaySearchResults(filteredProducts);
}

// Fungsi untuk menampilkan hasil pencarian pada tabel
function displaySearchResults(searchResults) {
  const productList = document.getElementById("product-list");

  // Menghapus semua data produk yang sebelumnya ditampilkan
  while (productList.firstChild) {
    productList.firstChild.remove();
  }

  // Menambahkan data produk ke dalam tabel
  searchResults.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>
          ${product.image}
        </td>
        <td>${product.freshness}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>
          <button onclick="editProduct(${index})">Edit</button>
          <button onclick="deleteProduct(${index})">Delete</button>
        </td>
      `;
    productList.appendChild(row);
  });
}

// Menambahkan event listener untuk submit form produk
document.getElementById("productForm").addEventListener("submit", addProduct);

// Menambahkan event listener untuk button pencarian
document
  .getElementById("searchButton")
  .addEventListener("click", searchProduct);
