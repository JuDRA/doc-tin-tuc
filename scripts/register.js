"use strict";

const inputFirstname = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");

////////
// Bắt sự kiện ấn vào nút Register
btnSubmit.addEventListener("click", function () {
  // Lấy dữ liệu nhập vào từ người dùng nhập vào qua form
  const user = new User(
    inputFirstname.value,
    inputLastname.value,
    inputUsername.value,
    inputPassword.value
  );
  // check validate
  const isValidate = validate(user);
  if (isValidate) {
    // thêm user vào mảng userAr
    userArr.push(user);
    // lưu dữ liệu lại (update dữ liệu) xuống localstorage
    saveToStorage("userArr", userArr);
    alert("Đăng ký thành công!");
    // Điều hướng sang trang Login
    window.location.assign("../pages/login.html");
  }
});
////////////////////
// Hàm validate thông tin đăng ký của người dùng nhập vào form
// hàm này trả về true nếu hợp lệ và false nếu không hợp lệ
function validate(user) {
  let isValidate = true;
  // 1. Không có trường nào bị bỏ trống
  if (user.firstname.trim().length === 0) {
    alert("Vui lòng nhập First Name!");
    isValidate = false;
  }
  if (user.lastname.trim().length === 0) {
    alert("Vui lòng nhập LastName!");
    isValidate = false;
  }
  if (user.username.trim().length === 0) {
    alert("Vui lòng nhập Usernam!");
    isValidate = false;
  }
  // Không dùng phương thức .trim(length === 0 như  các inpput trên
  // Vì đề yêu câu: Password phải có nhiều hơn 8 ký tự
  // Nên dấu cách khoảng trắng cũng là 1 ký tự thoả yêu cầu
  if (user.password === "") {
    alert("Vui lòng nhập Password!");
    isValidate = false;
  }
  if (inputPasswordConfirm.value === "") {
    alert("Vui lòng nhập Confirm Password!");
    isValidate = false;
  }
  // 2. Usernam không được trùng với Usernam của các người dùng trước đó
  if (
    // Nếu tồn tjai 1 username nào đó trùng với của người nhập
    !userArr.every((item) =>
      (item.username !== user.username) !== user.username ? true : false
    )
  ) {
    alert("User name đã tồn tại!");
    isValidate = false;
  }
  // 3. Password và Confirm Password phải giống nhau
  if (user.password !== inputPasswordConfirm.value) {
    alert("Password và Confirm Password phải giống nhau!");
    isValidate = false;
  }
  // 4. Password phải có nhiều hơn 8 ký tự
  if (user.password.length <= 8) {
    alert("Password phải có nhiều hơn 8 ký tự !");
    isValidate = false;
  }
  return isValidate;
}
