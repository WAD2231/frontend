export default function updateLocalCart( cart ) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
