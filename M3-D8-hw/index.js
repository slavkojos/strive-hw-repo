const url = "https://striveschool-api.herokuapp.com/api/product/";

const fetchProducts = async () => {
  try {
    let response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTIxMjg5YzI2ZjAwMTU3ZjljMjIiLCJpYXQiOjE2MTU5OTE2OTEsImV4cCI6MTYxNzIwMTI5MX0.xILIO3GQJT9ouqgILUtxz0epGQhl2SGf2_lMFm5iw2M",
      },
    });
    let data = await response.json();
    console.log(data);
  } catch (error) {}
};
window.onload = fetchProducts;
