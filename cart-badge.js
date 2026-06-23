window.updateCartBadge = function () {

    const badge =
    document.getElementById("cart-count");

    if (!badge) return;

    const cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    let totalItems = 0;

    cart.forEach(item => {

        totalItems += item.quantity || 1;

    });

    badge.textContent = totalItems;

};

updateCartBadge();