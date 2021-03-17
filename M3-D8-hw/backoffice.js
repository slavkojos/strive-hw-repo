const submitForm = document.getElementById("submit-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log("ok");
  const url = "https://striveschool-api.herokuapp.com/api/product/";

  let myProduct = {
    name: document.getElementById("name-input"),
    description: document.getElementById("description-input"),
    brand: document.getElementById("brand-input"),
    imageURL: document.getElementById("image-url-input"),
    price: document.getElementById("price-input"),
  };
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTIxMjg5YzI2ZjAwMTU3ZjljMjIiLCJpYXQiOjE2MTU5OTE2OTEsImV4cCI6MTYxNzIwMTI5MX0.xILIO3GQJT9ouqgILUtxz0epGQhl2SGf2_lMFm5iw2M",
      },
      body: JSON.stringify(myProduct),
    });
    if (response.ok) {
      alert("Event was created successfully");
    } else {
      alert("something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

submitForm.onSubmit = handleSubmit;
