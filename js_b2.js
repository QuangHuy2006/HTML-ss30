let bookStore = [
    {
        id : 1,
        name :" Đắc nhân tâm" ,
        price : 100000,
        quantity : 100,
        category : "Sách cổ"
    }
];

let choose;
let cart = [];

function showBook(bookStore) {
    let categoryInput = prompt("Nhập thể loại bạn muốn xem : ");
    const bookCategory = bookStore.filter(item => item.category.toLowerCase() === categoryInput.toLowerCase());
    if (bookCategory.length === 0){
        alert("Không có sách nào !");
    } else {
        console.log(bookCategory);
    }
};

function addBook(bookStore) {
    let idBook = +prompt("Nhập id sách mới : ");
    let nameBook = prompt("Nhập tên sách : ");
    let priceBook = +prompt("Nhập tiền sách : ");
    let quantityBook = +prompt("Nhập số lượng sách nhập : ");
    let categoryBook = prompt("Nhập thể loại sách : ");
    bookStore.push({id : idBook,name : nameBook,price : priceBook,quantity : quantityBook,category : categoryBook});
    alert("Đã thêm sách thành công.");
};

function searchBook() {
    let chose = prompt(`    1.Tìm theo tên.
        2.Tìm theo id.`);
    if (chose == 1){
        let input = prompt("Mời bạn nhập vào tên sách muốn tìm : ");
        const checkInput = bookStore.filter(item => item.name.toLowerCase() === input.toLowerCase());
        if (checkInput.length === 0){
            console.log("Không tìm thấy sách nào !");
        } else {
            console.log("Thông tin sách bạn cần tìm là : ");
            console.table(checkInput);
        }
    } else if (chose == 2){
        let input = +prompt("Mời bạn nhập vào id sách muốn tìm : ");
        const checkInput = bookStore.filter(item => item.id === input);
        if (checkInput.length === 0){
            console.log("Không tìm thấy sách nào !");
        } else {
            console.log("Thông tin sách bạn cần tìm là : ");
            console.table(checkInput);
        }
    } else {
        alert("Không hợp lệ!");
    }
};

function buyBook() {
    let input = +prompt("Nhập id sách bạn muốn mua : ");
    const checkInput = bookStore.find(item => item.id === input);
    if (checkInput.length === 0){
        console.log("Không tìm thấy sách nào !");
    } else {
        let quantityBuy = +prompt("Nhập số lượng cần mua : ");
        checkInput.quantity -= quantityBuy;
        cart.push({
            price : checkInput.price,
            quantity : quantityBuy
        });
        alert("Đã mua thành công.");
    }
};

function sortBook(bookStore) {
    let chose = prompt(`    1.Tăng dần.
        2.Giảm dần.`);
        if (chose == 1){
            for (let i=0;i<Object.keys(bookStore).length;i++){
                for (let j=i+1;j<Object.keys(bookStore).length;j++){
                    if (bookStore[i].price > bookStore[j].price){
                        let temp = bookStore[i];
bookStore[i]=bookStore[j];
                        bookStore[j]=temp;
                    }
                }
            }
            alert("Đã sắp xếp.");
            console.table(bookStore);
        } else if (chose == 2){
            for (let i=0;i<Object.keys(bookStore).length;i++){
                for (let j=i+1;j<Object.keys(bookStore).length;j++){
                    if (bookStore[i].price < bookStore[j].price){
                        let temp = bookStore[i];
                        bookStore[i]=bookStore[j];
                        bookStore[j]=temp;
                    }
                }
            }
            alert("Đã sắp xếp.");
            console.table(bookStore);
        } else {
            alert("Không hợp lệ!");
        }
};

function totalBook() {
    const total_book = cart.reduce((sum,item) => sum + item.quantity,0);
    console.log(`Số lượng sách đã mua là : ${total_book}`);
    const total = cart.reduce((sum,item) => sum + item.price*item.quantity,0);
    console.log(`Số tiền bạn cần thanh toán là : ${total}`);
};

function totalBookStore() {
    const totalStore = bookStore.reduce((sum,item) => sum + item.quantity,0);
    console.log(`Tổng số lượng sách còn trong kho là : ${totalStore}`);
};

do {
    choose = prompt(`   1.Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
    2.Thêm sách mới vào kho
    3.Tìm kiếm sách theo tên hoặc id.
    4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
    5.Sắp xếp sách theo giá:
    6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
    7.Hiển thị tổng số lượng sách trong kho.
    8.Thoát chương trình.`);

    switch (choose) {
        case "1":
            showBook(bookStore);
            break;
        case "2":
            addBook(bookStore);
            break;
        case "3":
            searchBook(bookStore);
            break;
        case "4":
            buyBook(bookStore);
            break;
        case "5":
            sortBook(bookStore);
            break;
        case "6":
            totalBook(bookStore);
            break;
        case "7":
            totalBookStore(bookStore);
            break;
        case "8":
            console.log("Chương trình kết thúc!");
            break;
        default:
            console.log("Không hợp lệ!");
            break;
    }
}while(choose!=8);