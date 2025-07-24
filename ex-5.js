// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function asyncchronos() {
  try {
  const displayJonhProfile = await getJohnProfile ();
  console.log(displayJonhProfile);
}
  catch (error) {
  console.log('👿 Failed to request data from server');
  }
}
asyncchronos();