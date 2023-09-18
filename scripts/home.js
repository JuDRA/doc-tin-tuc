'use strict';
const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");
displayHome();

/////////////////
// Hàm hiển thị nội dung trên trang home 1 cáhch  hợp lý tuỳ vào trường hophjw
function displayHome() {
    // Nếu có người đang đăng nhập thì ẩn "loginModal" và hiển thị "Main content"
    if(userActive) {
        loginModal.style.display = "none";
        mainContent.style.display = "block";
        // Thêm thông báo welcomeMessage
        welcomeMessage.textContent = `Welcome ${userActive.firstname}`;
        //   nếu không có ai đang đăng nhập thì ẩn " mainContent và hiển thị "loginMessage"
        } else {
            loginModal.style.display = "block";
            mainContent.style.display = "none";
        }
}
////////////
// bắt sự kiện vào nút Logout
btnLogout.addEventListener("click", function(){
    const isLogout = confirm("bạn chắc chắn muốn Logout chứ?");
    if (isLogout) {
        // Gán giá trị userActive về null để biểu hiện là không có ai đang đăng nhập
        userActive = null;
        // lưu (cập nhật) dữ liệu xuống localStorage
        saveToStorage("userActive", userActive);
        // Hiển thị trang home ở dạng chưa có user đăng nhập
        displayHome();
    }
});'use strict'
