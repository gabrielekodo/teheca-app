//selecting elements
const btns = document.querySelectorAll(".btn");
const container = document.querySelector(".row");
const cards = document.querySelectorAll(".login-card");

//prepopulating the price input field upon product name  selection
const selection = document.getElementById("producename");
selection.onchange = (event) => {
  let price = event.target.options[event.target.selectedIndex].dataset.price;

  //populating the price field of the element
  document.getElementById("price").value = price;
};

// automatic feeling of the bill field upon entry of the tonnage
document.getElementById("salestonnage").addEventListener("keyup", (e) => {
  const tonnage = Number(document.getElementById("salestonnage").value);
  const price = Number(document.getElementById("price").value);
  document.getElementById("bill-paid").value = price * tonnage;
});


// **********************************************************************************
//Show different container depending on the button clicked in the sidebar
container.addEventListener("click", (e) => {
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.id;

  if (id) {
    // remove class of active from all buttons
    btns.forEach((btn) => {
      btn.classList.remove("active-btn");

      // add active class to only clicked button
      e.target.classList.add("active-btn");
    });

    // hide other cards
    cards.forEach((card) => {
      card.classList.add("d-none");
    });

    // show only active card
    const element = document.getElementById(id);
    element.classList.remove("d-none");
  }
});
