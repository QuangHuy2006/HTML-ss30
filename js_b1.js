const products = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];
const cart = [];
function show() {
  return products;
}
function buy() {
  let id = +prompt(`nhap id mon an ban muon tim kiem: `);
  let find = products.findIndex((value) => value.id == id);
  if (find >= 0) {
    let amount = +prompt(`nhap so luong ban muon mua`);
    if (amount > products[find].quantity) {
      alert(`so luong vuot qua muc`);
    } else {
      products[find].quantity -= amount;
      cart[cart.length] = {
        id: cart.length + 1,
        name: products[find].name,
        price: products[find].price,
        quantity: amount,
        category: products[find].category};
      return cart;
    }
  } else {
    alert(`khong co san pham nay`);
  }
}
function sortIncrease() {
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j].price > products[j + 1].price) {
        let temp = products[j];
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }
  return products;
}
function sortDecrease() {
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j].price < products[j + 1].price) {
        let temp = products[j];
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }
  return products;
}
function total() {
  const total = cart.reduce(
    (value1, value2) => value1 + value2.price * value2.quantity,
    0
  );
  return total;
}
let choice = 0;
do {
  choice = +prompt(`
        1. Hiển thị các sản phẩm theo tên danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát.
        `);
  switch (choice) {
    case 1:
      console.log(show());
      break;
    case 2:
      console.log(buy());
      break;
    case 3:
      let child = +prompt(`
            1. Tăng dần
            2. Giảm dần
            `);
      switch (child) {
        case 1:
          console.log(sortIncrease());
          break;
        case 2:
          console.log(sortDecrease());
          break;
      }
      break;
    case 4:
      console.log(total());
      break;
    case 5:
      alert(`thoat chuong trinh`);
      break;
  }
} while (choice != 5);
