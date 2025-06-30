const produk = [
  {
    nama: "Oppo",
    harga: 2000000,
    gambar: "Oppo.jpeg"
  },
  {
    nama: "Vivo",
    harga: 1900000,
    gambar: "Vivo.jpg",
  },
  {
    nama: "Realme",
    harga: 1600000,
    gambar: "Realme.jpeg"
  },
  {
    nama: "Samsung",
    harga: 3000000,
    gambar: "Samsung.avif"
  },
  {
    nama: "Telkomsel",
    harga: 30000,
    gambar: "Telkomsel.jpeg"
  },
  {
    nama: "Indosat",
    harga: 35000,
    gambar: "Indosat.jpeg"
  },
  {
    nama: "Axis",
    harga: 40000,
    gambar: "Axis.jpeg"
  },
  {
    nama: "Smartfren",
    harga: 35000,
    gambar: "Smartfren.jpeg"
  },
  {
    nama: "Lcd hp",
    harga: 150000,
    gambar: "Lcd.jpeg"
  }
];


let keranjang = [];

function tampilkanProduk() {
  const container = document.getElementById("produk-list");
  produk.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.gambar}" alt="${item.nama}" width="150">
      <h3>${item.nama}</h3>
      <p>Rp ${item.harga.toLocaleString()}</p>
      <button onclick="tambahKeKeranjang(${index})">Tambah</button>
    `;
    container.appendChild(card);
  });
}

function tambahKeKeranjang(index) {
  keranjang.push(produk[index]);
  perbaruiKeranjang();
}

function perbaruiKeranjang() {
  const list = document.getElementById("keranjang-list");
  const totalElem = document.getElementById("total-harga");
  list.innerHTML = "";

  let total = 0;
  keranjang.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
    list.appendChild(li);
    total += item.harga;
  });

  totalElem.textContent = `Rp ${total.toLocaleString()}`;
}

function checkout() {
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong!");
  } else {
    alert("Terima kasih telah berbelanja di toko kami,semoga datang kembali!");
    keranjang = [];
    perbaruiKeranjang();
  }
}

tampilkanProduk();
