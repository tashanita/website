// // toggle class active
// const isi = document.querySelector('.isi');
// //ketika menu diklik
// document.querySelector('#else').onclick = () => {
//     isi.classList.toggle('active');
// }; contoh ^^^^^^^

// //database s
// use('mongodbVSCodePlaygroundDB');
// //database f

document.addEventListener('alpine:init', () => {
    // component produk
    Alpine.data('produk', () => ({
        items: [
            { id: 1, name: 'anting', asset: 'anting.png', price: 10000, deskripsi: 'anting emas spesial', stok: 10, kategori: 'aksesoris' },
            { id: 2, name: 'kalung', asset: 'kalung.png', price: 15000, deskripsi: 'kalung elegan', stok: 5 },
            { id: 3, name: 'ora', asset: 'profileDefault.png', price: 12000, deskripsi: 'produk default', stok: 99 },
        ],
        selectedItem: null, // untuk detail
    }));

    // store global cart + isOpen untuk toggle keranjang
    Alpine.store('cart', {
        items: [], // { id, name, price, quantity }
        totalHarga: 0,
        jumlah: 0,
        isOpen: false,

        updateTotal() {
            this.totalHarga = this.items.reduce((total, it) => total + it.price * it.quantity, 0);
            this.jumlah = this.items.reduce((total, it) => total + it.quantity, 0);
        },

        add(newItem) {
            const cartItem = this.items.find(it => it.id === newItem.id);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                this.items.push({ ...newItem, quantity: 1 });
            }
            this.updateTotal();
        },

        remove(itemId) {
            const cartItem = this.items.find(it => it.id === itemId);
            if (cartItem) {
                cartItem.quantity--;
                if (cartItem.quantity <= 0) {
                    this.items = this.items.filter(it => it.id !== itemId);
                }
            }
            this.updateTotal();
        },

        toggleOpen() {
            this.isOpen = !this.isOpen;
        }
    });
});

// helper format rupiah (global)
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
};
// // produk 1
// let judul = null;
const detail1 = document.querySelector('.detail');
let namaproduk1 = document.querySelector('#namaproduk1');
const deskripsiproduk1 = document.querySelector('#deskripsiproduk1');
const kategoriproduk1 = document.querySelector('#kategoriproduk1');
const hargaproduk1 = document.querySelector('#hargaproduk1');
const imgproduk1 = document.querySelector('#produkg1');
const stokproduk1 = document.querySelector('#stokproduk1');
namaproduk1.textContent = judul;
document.querySelector('.Selengkapnya').onclick = function () {
    detail1.style.display = 'block';
}
document.querySelector('.tutupDeskripsi').onclick = function () {
    detail1.style.display = 'none';
}

// const formisi1 = document.querySelector('#formisi1');
// const isinamaproduk1 = document.querySelector('#isinamaproduk1');
// const isikategoriproduk1 = document.querySelector('#isikategoriproduk1');
// const isideskripsiproduk1 = document.querySelector('#isideskripsiproduk1');
// const isihargaproduk1 = document.querySelector('#isihargaproduk1');
// const gambarproduk1 = document.querySelector('#gambarproduk1');
// const isistokproduk1 = document.querySelector('#isistokproduk1');
// document.querySelector('#tambahProduk').onclick = function () {
//     formisi.style.display = 'block';
// }

// document.querySelector('#kirim1').onclick = function () {
//     produk.items.id++;
//     produk.items.name.push(isinamaproduk1.value);
//     produk.items.asset.push(gambarproduk1.value);
//     produk.items.price.push(isihargaproduk1.value);
//     console.log(produk.items.asset);
//     judul = isinamaproduk1.textContent;
//     kategoriproduk1.textContent = isikategoriproduk1.value;
//     deskripsiproduk1.textContent = isideskripsiproduk1.value;
//     hargaproduk1.textContent = isihargaproduk1.value;
//     imgproduk1.image = gambarproduk1.value;
//     stokproduk1.innerHTML = isistokproduk1.value;
//     formisi1.style.display = 'none';
// }
// document.querySelector('#batal1').onclick = function () {
//     formisi1.style.display = 'none';
// }