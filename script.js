// let input1 = document.querySelector("#input");
// let input2 = document.querySelector("#input123");
// let plus = document.querySelector("#buttonPlus");
// let h1 = document.querySelector("#otvets");

// plus.addEventListener("click", () => {
//   // let value1 = +input1.value; //2
//   let value2 = +input2.value; //5
//   h1.innerHTML = value1 + value2;

// let input = document.querySelector(".input");
// let btn = document.querySelector(".btn");
// let wrapper_right = document.querySelector(".wrap_left");

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   wrap_left.innerHTML = `
//   <div class="block">
//   <p>${input.value}</p>
// </div>
//   `;
// });
document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.querySelector(".forName");
  const relationshipInput = document.querySelector(".family");
  const phoneInput = document.querySelector(".smartphone");
  const contactsList = document.querySelector(".contacts");
  const getStartedBtn = document.querySelector(".getStart");

  function addContact() {
    const name = nameInput.value.trim();
    const relationship = relationshipInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name !== "" && relationship !== "" && phone !== "") {
      const newContact = document.createElement("div");
      newContact.classList.add("contactItem");
      newContact.textContent = `${name} - ${relationship}: ${phone}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("deleteButton");
      deleteButton.addEventListener("click", function () {
        newContact.remove();
      });
      newContact.appendChild(deleteButton);

      contactsList.appendChild(newContact);

      nameInput.value = "";
      relationshipInput.value = "";
      phoneInput.value = "";
    } else {
      alert("Please fill in all fields.");
    }
  }

  getStartedBtn.addEventListener("click", addContact);
});
