const submitForm = document.getElementById("submit-form");
const url = "https://striveschool-api.herokuapp.com/api/product/";
const handleSubmit = async (event) => {
  event.preventDefault();
  console.log("ok");

  let myProduct = {
    name: document.getElementById("name-input").value,
    description: document.getElementById("description-input").value,
    brand: document.getElementById("brand-input").value,
    imageUrl: document.getElementById("image-url-input").value,
    price: document.getElementById("price-input").value,
  };

  console.log(myProduct);
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
      console.log(response.body);
      alert("something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

const editOrDeleteDiv = document.getElementById("editordelete");
const fetchCollection = async () => {
  try {
    let response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTIxMjg5YzI2ZjAwMTU3ZjljMjIiLCJpYXQiOjE2MTU5OTE2OTEsImV4cCI6MTYxNzIwMTI5MX0.xILIO3GQJT9ouqgILUtxz0epGQhl2SGf2_lMFm5iw2M",
      },
    });
    let data = await response.json();
    console.log(data);

    data.forEach((item) => {
      const itemDiv = document.createElement("div");
      editOrDeleteDiv.appendChild(itemDiv);
      itemDiv.classList.add("d-flex", "w-100", "border", "align-items-center");
      itemDiv.setAttribute("id", `${item._id}`);
      const itemName = document.createElement("h6");
      itemDiv.appendChild(itemName);
      itemName.innerHTML = `Product name: <span class="font-weight-normal">${item.name}</span>`;
      itemName.classList.add("flex-grow-1");
      const buttonsDiv = document.createElement("div");
      itemDiv.appendChild(buttonsDiv);
      itemDiv.classList.add("d-flex");
      const editButton = document.createElement("a");
      const deleteButton = document.createElement("button");
      buttonsDiv.appendChild(editButton);
      buttonsDiv.appendChild(deleteButton);
      editButton.innerText = "Edit";
      deleteButton.innerText = "Delete";
      editButton.classList.add("btn", "btn-primary", "mx-2");
      deleteButton.classList.add("btn", "btn-danger", "mx-2");
      //editButton.onclick = handleEdit;
      deleteButton.onclick = handleDelete;
      editButton.setAttribute("href", `detail.html?id=${item._id}`);
    });
  } catch (error) {}
};

const handleDelete = async (event) => {
  const id = event.target.parentNode.parentNode.id;
  try {
    let response = await fetch(url + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTIxMjg5YzI2ZjAwMTU3ZjljMjIiLCJpYXQiOjE2MTU5OTE2OTEsImV4cCI6MTYxNzIwMTI5MX0.xILIO3GQJT9ouqgILUtxz0epGQhl2SGf2_lMFm5iw2M",
      },
    });
    if (response.ok) {
      alert("event deleted successfully");
    } else {
      alert("something went wrong with the deletion process");
    }
  } catch (error) {}
};

window.onload = fetchCollection;
