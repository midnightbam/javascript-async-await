//Exercise #1

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
// Start coding here
async function showJohnProfile() {
  try {
    const profile = await getJohnProfile();
    console.log("ชื่อ:", profile.name);
    console.log("อายุ:", profile.age);
    console.log("งานอดิเรก:", profile.hobbies.join(", "));
  } catch (error) {
    console.log("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
  }
}

showJohnProfile();