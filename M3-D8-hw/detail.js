const url = "https://striveschool-api.herokuapp.com/api/product/";
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
const fetchProduct = async () => {
  try {
    let response = await fetch(url + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTIxMjg5YzI2ZjAwMTU3ZjljMjIiLCJpYXQiOjE2MTU5OTE2OTEsImV4cCI6MTYxNzIwMTI5MX0.xILIO3GQJT9ouqgILUtxz0epGQhl2SGf2_lMFm5iw2M",
      },
    });
    let data = await response.json();
    console.log(data);
    let myProduct = {
      name: document.getElementById("name-input"),
      description: document.getElementById("description-input"),
      brand: document.getElementById("brand-input"),
      imageUrl: document.getElementById("image-url-input"),
      price: document.getElementById("price-input"),
    };
    myProduct.name.value = data.name;
    myProduct.description.value = data.description;
    myProduct.brand.value = data.brand;
    myProduct.imageUrl.value = data.imageUrl;
    myProduct.price.value = data.price;
  } catch (error) {}
};

const handleSubmit = async (event) => {
  event.preventDefault();
  let myProduct = {
    name: document.getElementById("name-input").value,
    description: document.getElementById("description-input").value,
    brand: document.getElementById("brand-input").value,
    imageUrl: document.getElementById("image-url-input").value,
    price: document.getElementById("price-input").value,
  };
  console.log(myProduct);
  try {
    let response = await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTIxMjg5YzI2ZjAwMTU3ZjljMjIiLCJpYXQiOjE2MTU5OTE2OTEsImV4cCI6MTYxNzIwMTI5MX0.xILIO3GQJT9ouqgILUtxz0epGQhl2SGf2_lMFm5iw2M",
      },
      body: JSON.stringify(myProduct),
    });
    if (response.ok) {
      alert("Event was edited successfully");
    } else {
      console.log(response.body);
      alert("something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};
window.onload = fetchProduct;
