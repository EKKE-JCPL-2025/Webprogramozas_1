let cart = [];

function addToCart(name, price) {
  cart[cart.length] = { name: name, price: price };
  htmlDOMRefresh();
}

function sum() {
  let result = 0;
  for (let i = 0; i < cart.length; i++) {
    result += Number(cart[i].price);
  }
  return result;
}

function htmlDOMRefresh() {
  const ul = document.getElementById("cart");
  const sumEL = document.getElementById("sum");
  if (!ul) return;
  ul.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `${cart[i].name}: ${cart[i].price} Ft`;
    ul.appendChild(li);
  }

  if (sumEL) {
    sumEL.textContent = sum();
  }
}

const menu = document.getElementById("etlap");

if (menu) {
  menu.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("hozzaad")) {
      const tr = e.target.closest("tr");
      const nev = tr.children[0].textContent;
      const ar = Number(tr.children[1].textContent);
      addToCart(nev, ar);
    }
  });
}

htmlDOMRefresh();
