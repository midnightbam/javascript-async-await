//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
getJohnProfile()
  .then((profile) => {
    console.log(profile); // แสดงข้อมูลโปรไฟล์
    return getJohnOrders(); // ส่งต่อไปเรียก order
  })
  .then((orders) => {
    console.log(orders); // แสดงข้อมูล order
  })
  .catch((err) => {
    console.log("เกิดข้อผิดพลาด:", err);
  });