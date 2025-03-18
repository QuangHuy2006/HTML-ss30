const phone = [
  {
    id: "1",
    name: "J20 Ultra",
    price: 10000,
    quantity: 30,
    company: "samsung",
  },
];
const carts = [];
let choice = 0;
function show() {
  let find = prompt(`nhap hang ban muon tim kiem`);
  const filter = phone.filter((value) => value.company == find);
  return filter;
}
function add() {
  let newid = prompt(`nhap id dien thoai moi`);
  let newname = prompt(`nhap ten dien thoai moi`);
  let newprice = +prompt(`nhap gia dien thoai moi`);
  let newquantity = +prompt(`nhap so luong dien thoai moi`);
  let newcompany = prompt(`nhap ten hang dien thoai moi`);
  phone[phone.length] = {
    id: newid,
    name: newname,
    price: newprice,
    quantity: newquantity,
    company: newcompany,
  };
  return phone;
}
function search() {
  let find = prompt(`nhap ten hoac id`);
  let findid = phone.findIndex((value) => value.id == find);
  let findphone = phone.findIndex((value) => value.name == find);
  if (findid >= 0 && findphone < 0) {
    return phone[findid];
  } else {
    return phone[findphone];
  }
}
function buy() {
  let id = prompt(`nhap id ban muon tim kiem: `);
  let find = phone.findIndex((value) => value.id == id);
  if (find >= 0) {
    let amount = +prompt(`nhap so luong ban muon mua`);
    if (amount > phone[find].quantity) {
      alert(`so luong vuot qua muc`);
    } else {
      phone[find].quantity -= amount;
      carts[carts.length] = {
        id: (carts.length + 1).toString(),
        name: phone[find].name,
        price: phone[find].price,
        quantity: amount,
        company: phone[find].company,
      };
      return carts;
    }
  } else {
    alert(`khong co san pham nay`);
  }
}
function abate() {
  alert(`thanh toan thanh cong`);
  carts.length = 0;
  return carts;
}
function sortIncrease() {
  for (let i = 0; i < phone.length; i++) {
    for (let j = 0; j < phone.length - i - 1; j++) {
      if (phone[j].price > phone[j + 1].price) {
        let temp = phone[j];
        phone[j] = phone[j + 1];
        phone[j + 1] = temp;
      }
    }
  }
  return phone;
}
function sortDecrease() {
  for (let i = 0; i < phone.length; i++) {
    for (let j = 0; j < phone.length - i - 1; j++) {
      if (phone[j].price < phone[j + 1].price) {
        let temp = phone[j];
        phone[j] = phone[j + 1];
        phone[j + 1] = temp;
      }
    }
  }
  return phone;
}
function total() {
  const total = carts.reduce(
    (value1, value2) => value1 + value2.price * value2.quantity,
    0
  );
  return total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
function showbyrow() {
  let result = '';
  for (let i = 0; i < phone.length; i++) {
    result += `${phone[i].company} - ${phone[i].quantity}\n`;
  }
  return result;
}

do {
  choice = +prompt(`
        1. Hiển thị danh sách điện thoại theo hãng.
        2. Thêm điện thoại mới vào cửa hàng.
        3. Tìm kiếm điện thoại theo tên hoặc id.
        4. Mua điện thoại.
        5. Thanh toán tất cả điện thoại trong giỏ hàng. 
        6. Sắp xếp điện thoại theo giá.
        7. Hiển thị tổng số tiền của các điện thoại trong kho.
        8. Hiển thị tổng số lượng điện thoại theo từng hàng.
        9. Thoát chương trình.
        `);
  switch (choice) {
    case 1:
      console.log(show());
      break;
    case 2:
      console.log(add());
      break;
    case 3:
      console.log(search());
      break;
    case 4:
      console.log(buy());
      break;
    case 5:
      console.log(abate());
      break;
    case 6:
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
    case 7:
      console.log(total());
      break;
    case 8:
      console.log(showbyrow());
      break;
    case 9:
      alert(`thoat chuong trinh`);
      break;
  }
} while (choice != 9);
