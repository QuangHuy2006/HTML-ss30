function checkIsEmpty(field) {
    if (field === "" || field === null || field === undefined) {
      return true;
    }
    return false;
  }
  
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
  
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
  
    return passwordRegex.test(password);
  }
  
  function checkEmailExited(array, email) {
    if (!Array.isArray(array)) {
      alert("Đây không phải là 1 mảng");
    }
  
    const findEmail = array.find((element) => element.email === email);
  
    if (findEmail) {
      return true;
    }
  
    return false;
  }
  
  const users = [];
  
  function getInput() {
    // Lấy dữ liệu từ người dùng
    const userName = prompt("Nhập tên người dùng");
    const email = prompt("Nhập email người dùng");
    const password = prompt("Nhập mật khẩu");
  
    if (checkIsEmpty(userName)) {
      alert("Tên không được để trống");
    } else if (checkIsEmpty(email)) {
      alert("Email không được để trống");
    } else if (checkIsEmpty(password)) {
      alert("Mật khẩu không được để trống");
    } else {
      // Kiểm tra các điều kiện nâng cao
      if (!validateEmail(email)) {
        alert("Email không đúng định dạng");
      } else if (!validatePassword(password)) {
        alert("Mật khẩu không đúng định dạng");
      } else if (checkEmailExited(users, email)) {
        alert("Email đã tồn tại");
      } else {
        // Thêm dữ liệu vào trong mảng
        const newUser = {
          id: Math.ceil(Math.random() * 1000000),
          userName,
          email,
          password,
        };
  
        // Push object newUser vào trong mảng
        users.push(newUser);
  
        // Hiển thị thông báo
        alert("Thêm tài khoản thành công");
      }
      // Tất cả các điều kiện đều thỏa mãn
    }
  
    // Validate dữ liệu từ người dùng
    // + Valiate email
    // + Validate mật khẩu
    // + Check trùng email
  }
  
  let choice;
  
  do {
    choice = +prompt("Mời bạn nhập lựa chọn:");
  
    switch (choice) {
      case 1:
        getInput();
  
        break;
      case 2:
        console.table(users);
        break;
      case 3:
        alert("Thoát khỏi chương trình");
        break;
  
      default:
        break;
    }
  } while (choice !== 3);