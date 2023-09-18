"use strict";

// Class user để đại diện cho thông tin của người dùng
class User {
  constructor(
    firstname,
    lastname,
    username,
    password,
    // Mặc định nếu không khai báo thì giá tri của 2 thuộc tính này
    paperSize = 10,
    category = "business"
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    //2 thuộc tính thêm vào để làm yêu cầu số 9 ==> cá nhân hoá phần cài đặt trang tin cho từng user
    this.paperSize = paperSize;
    this.category = category;
  }
}
// Class task để chứa các thông tin về Task trong Todo List
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
