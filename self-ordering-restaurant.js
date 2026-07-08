const defaultMenuItems = [
  { id: "homemade-drinks", name: "32oz homemade drinks", category: "DRINKS", price: 4, desc: "Fresh handmade agua frescas blended with real fruit and sweetened with fresh cane sugar.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/AIIOTSGQNEBBLTYAJ5VU4KBL.jpeg?width=640&optimize=medium", toppingCategoryIds: ["agua-frescas"] },
  { id: "breakfast-taco", name: "Breakfast taco", category: "BREAKFAST", price: 3, desc: "Breakfast taco from the SoCal Tacos menu.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/UM5UDPOAYLWJQIVT7K6TO3MB.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], outOfStock: true },
  { id: "breakfast-burrito", name: "Breakfast burrito", category: "BREAKFAST", price: 8, desc: "Breakfast burrito from the SoCal Tacos menu.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/HAEMTJ4ZP25ACOT7VT6ZS3QU.png?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], outOfStock: true },
  { id: "pork-taco", name: "Pork taco", category: "LUNCH", price: 13, desc: "Three tacos with your choice of SoCal toppings.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/QS2LHOTOLEK64X5NHSKB3VCS.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"] },
  { id: "chicken-taco", name: "Chicken taco", category: "LUNCH", price: 13, desc: "Three chicken tacos with your choice of SoCal toppings.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/LNXII34WYGXEFLEWWHRU4NBA.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"] },
  { id: "chorizo-taco", name: "Chorizo taco", category: "LUNCH", price: 15, desc: "Three chorizo tacos with your choice of SoCal toppings.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/RLK4VMZBHH3YPI73KFYLMKMM.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"] },
  { id: "al-pastor-tacos", name: "Al pastor tacos", category: "LUNCH", price: 15, desc: "Three al pastor tacos with your choice of SoCal toppings.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/ZQFFEBTTRQL6PERXUP7HGWC7.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"] },
  { id: "vegan-chorizo-tacos", name: "Vegan chorizo tacos", category: "LUNCH", price: 15, desc: "Three vegan chorizo tacos with your choice of SoCal toppings.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/L67FL2ATZQSUAGLNJNUABZC3.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"] },
  { id: "lengua-tacos", name: "(Lengua) beef Tongue tacos", category: "LUNCH", price: 16, desc: "Three lengua tacos with your choice of SoCal toppings.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/CK476NVFAZAHSSFDGS4T35S6.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], badge: "Sale" },
  { id: "la-dog", name: "La dog", category: "LUNCH", price: 6, desc: "SoCal-style LA dog.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/L2RJACUXOWPSHE4RACMWWANZ.jpeg?width=640&optimize=medium" },
  { id: "lamb-birria-taco", name: "Lamb birria Taco", category: "LUNCH", price: 18, desc: "Three lamb birria tacos with your choice of SoCal toppings.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/CXB3QK7QRCF6INZUPGE35VI5.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"] },
  { id: "shrimp-steak-tacos", name: "Shrimp and steak tacos", category: "LUNCH", price: 18, desc: "Three shrimp and steak tacos with your choice of SoCal toppings.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/7MLVGRNLW6CBAWXV5BUWCNKS.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"] },
  { id: "steak-tacos", name: "Steak tacos 3x", category: "LUNCH", price: 18, desc: "Three steak tacos with your choice of SoCal toppings.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/AFEKHUPXLYOIVPTORSNLUKHI.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], outOfStock: true },
  { id: "street-corn", name: "Street corn", category: "SIDES", price: 6, desc: "Street corn from the SoCal Tacos menu.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/WM6WF22MK2VDFYBNB272YSD5.jpeg?width=640&optimize=medium" },
  { id: "barbacoa-beef-cheeks", name: "barbacoa beef cheeks 3x", category: "LUNCH", price: 16, desc: "Three barbacoa beef cheek tacos with your choice of SoCal toppings.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/LXS7VB2T5ZTBFACNLESBXGTI.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], outOfStock: true },
  { id: "guacamole-chips", name: "Guacamole and chips", category: "SIDES", price: 5, desc: "Fresh, creamy guacamole made with real avocados, lime, and a pinch of spice.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/ULDOA6QPOJG4TP2HLQAGL2LH.jpeg?width=640&optimize=medium", variants: [{ name: "5oz", price: 5 }, { name: "16oz", price: 7 }], badge: "Sale" }
];

const defaultToppingCategories = [
  { id: "taco-toppings", name: "Toppings", options: ["corn tortilla Shell", "flour tortilla Shell", "Romain Lettuce Leaf Shell", "cilantro", "melted chesse", "lime", "White Onions", "Mild salsa", "Spicy Habanero", "Very Spicy Chili De Arbol", "sour cream", { name: "5oz Small Guacamole And Chips", price: 5 }, { name: "16oz Large Guac and chips", price: 7 }] },
  { id: "agua-frescas", name: "Agua Frescas", options: ["Watermelon", "Pineapple", "Mango", "Horchata", "Guava"] }
];

const menuStorageKey = "counterserveMenuItems";
const toppingStorageKey = "counterserveToppingCategories";
const categoryOrderStorageKey = "counterserveCategoryOrder";
const menuVersionKey = "counterserveMenuVersion";
const currentMenuVersion = "socal-tacos-menu-2026-07-05";
const taxRate = 0.0825;
let menuItems = loadMenuItems();
let toppingCategories = loadToppingCategories();
let categoryOrder = loadCategoryOrder();
let cart = [];
let submittedOrders = [];
let lastOrder = null;
let pendingToppingItemId = null;

const money = value => value.toLocaleString("en-US", { style: "currency", currency: "USD" });
const $ = selector => document.querySelector(selector);
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;"
}[character]));
const imageMarkup = (src, className, fallbackText) => src
  ? `<div class="${className}"><img src="${escapeHtml(src)}" alt=""></div>`
  : `<div class="${className}" aria-hidden="true">${fallbackText}</div>`;

function loadMenuItems() {
  if (localStorage.getItem(menuVersionKey) !== currentMenuVersion) return normalizeMenuItems(defaultMenuItems);
  const savedItems = localStorage.getItem(menuStorageKey);
  if (!savedItems) return normalizeMenuItems(defaultMenuItems);

  try {
    const parsedItems = JSON.parse(savedItems);
    const normalizedItems = Array.isArray(parsedItems) && parsedItems.length > 0 ? normalizeMenuItems(parsedItems) : normalizeMenuItems(defaultMenuItems);
    const mergedItems = combineCaliBurgerSizes(normalizedItems);
    if (mergedItems.changed) {
      localStorage.setItem(menuStorageKey, JSON.stringify(mergedItems.items));
      localStorage.setItem(menuVersionKey, currentMenuVersion);
    }
    return mergedItems.items;
  } catch {
    return normalizeMenuItems(defaultMenuItems);
  }
}

function combineCaliBurgerSizes(items) {
  const isCaliBurger = item => /cali/i.test(item.name || "") && /burger/i.test(item.name || "");
  const caliBurgerItems = items.filter(isCaliBurger);
  if (caliBurgerItems.length < 2) return { items, changed: false };

  const firstBurgerIndex = items.findIndex(isCaliBurger);
  const jrBurger = caliBurgerItems.find(item => /\bjr\.?\b|junior/i.test(item.name || ""));
  const fullBurger = caliBurgerItems.find(item => item !== jrBurger) || caliBurgerItems[0];
  const orderedSizes = [
    jrBurger && { name: "Jr.", price: Number(jrBurger.price || 0) },
    fullBurger && { name: "Full Size", price: Number(fullBurger.price || 0) }
  ].filter(Boolean);
  const variants = orderedSizes.length
    ? orderedSizes
    : caliBurgerItems.map(item => ({ name: item.name, price: Number(item.price || 0) }));
  const toppingCategoryIds = [...new Set(caliBurgerItems.flatMap(item => item.toppingCategoryIds || []))];
  const displayItem = fullBurger || jrBurger || caliBurgerItems[0];
  const combinedItem = {
    ...displayItem,
    id: "cali-burger",
    name: "Cali Burger",
    price: variants[0]?.price ?? displayItem.price,
    desc: displayItem.desc || "Choose Jr. or full size.",
    image: displayItem.image || jrBurger?.image || "",
    toppingCategoryIds,
    variants,
    outOfStock: caliBurgerItems.every(item => item.outOfStock)
  };

  if (!combinedItem.outOfStock) delete combinedItem.outOfStock;

  const withoutSeparateBurgers = items.filter(item => !isCaliBurger(item));
  withoutSeparateBurgers.splice(firstBurgerIndex, 0, combinedItem);
  return { items: withoutSeparateBurgers, changed: true };
}

function normalizeMenuItems(items) {
  return items.map(item => {
    const starterItem = defaultMenuItems.find(defaultItem => defaultItem.id === item.id);
    return {
      ...starterItem,
      ...item,
      toppingCategoryIds: item.toppingCategoryIds || starterItem?.toppingCategoryIds || []
    };
  });
}

function loadToppingCategories() {
  if (localStorage.getItem(menuVersionKey) !== currentMenuVersion) return [...defaultToppingCategories];
  const savedCategories = localStorage.getItem(toppingStorageKey);
  if (!savedCategories) return [...defaultToppingCategories];

  try {
    const parsedCategories = JSON.parse(savedCategories);
    return Array.isArray(parsedCategories) ? parsedCategories : [...defaultToppingCategories];
  } catch {
    return [...defaultToppingCategories];
  }
}

function loadCategoryOrder() {
  const defaultOrder = uniqueCategories(defaultMenuItems);
  if (localStorage.getItem(menuVersionKey) !== currentMenuVersion) return defaultOrder;
  const savedOrder = localStorage.getItem(categoryOrderStorageKey);
  if (!savedOrder) return defaultOrder;

  try {
    const parsedOrder = JSON.parse(savedOrder);
    return Array.isArray(parsedOrder) ? parsedOrder : defaultOrder;
  } catch {
    return defaultOrder;
  }
}

function saveMenuItems() {
  try {
    localStorage.setItem(menuStorageKey, JSON.stringify(menuItems));
    localStorage.setItem(menuVersionKey, currentMenuVersion);
    return true;
  } catch {
    alert("The menu could not be saved. Try a smaller picture or use a picture link.");
    return false;
  }
}

function saveToppingCategories() {
  try {
    localStorage.setItem(toppingStorageKey, JSON.stringify(toppingCategories));
    localStorage.setItem(menuVersionKey, currentMenuVersion);
    return true;
  } catch {
    alert("The topping categories could not be saved.");
    return false;
  }
}

function saveCategoryOrder() {
  try {
    localStorage.setItem(categoryOrderStorageKey, JSON.stringify(categoryOrder));
    localStorage.setItem(menuVersionKey, currentMenuVersion);
    return true;
  } catch {
    alert("The category order could not be saved.");
    return false;
  }
}

function uniqueCategories(items = menuItems) {
  return [...new Set(items.map(item => item.category))];
}

function orderedCategories() {
  const currentCategories = uniqueCategories();
  categoryOrder = [
    ...categoryOrder.filter(category => currentCategories.includes(category)),
    ...currentCategories.filter(category => !categoryOrder.includes(category))
  ];
  return categoryOrder;
}

function categoryRank(category) {
  const index = orderedCategories().indexOf(category);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function orderedMenuItems(items = menuItems) {
  return [...items].sort((a, b) => {
    const categoryDifference = categoryRank(a.category) - categoryRank(b.category);
    if (categoryDifference !== 0) return categoryDifference;
    return menuItems.indexOf(a) - menuItems.indexOf(b);
  });
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function refreshMenuViews() {
  renderMenu();
  renderOwnerTools();
  renderToppingCategories();
  renderOwnerCategories();
}

function renderMenu() {
  const menuGrid = $("#menuGrid");
  menuGrid.classList.add("stage-overview");
  menuGrid.classList.remove("stage-category");

  const visibleItems = orderedMenuItems();

  menuGrid.innerHTML = visibleItems.map((item, index) => `
    <article class="menu-card ${item.outOfStock ? "is-disabled" : ""}" style="animation-delay: ${index * 45}ms">
      ${imageMarkup(item.image, "menu-photo", "Photo")}
      <div class="menu-card-body">
        ${item.badge ? `<span class="menu-badge">${escapeHtml(item.badge)}</span>` : ""}
        <h3>${escapeHtml(item.name)}</h3>
        <p class="item-description">${escapeHtml(item.desc)}</p>
        ${item.outOfStock ? `<p class="stock-note">Out of stock</p>` : ""}
        ${item.variants?.length ? `<p class="item-detail">Choose a size</p>` : ""}
        ${itemToppingCategories(item).length ? `<p class="item-detail">${itemToppingCategories(item).length} option group${itemToppingCategories(item).length === 1 ? "" : "s"}</p>` : ""}
      </div>
      <div class="menu-card-footer">
        <span class="price">${priceText(item)}</span>
        <button class="add-button" data-add="${item.id}" ${item.outOfStock ? "disabled" : ""}>${item.outOfStock ? "Out" : "Add"}</button>
      </div>
    </article>
  `).join("");
}

function priceText(item) {
  if (item.variants?.length) {
    const prices = item.variants.map(variant => variant.price);
    return `${money(Math.min(...prices))} - ${money(Math.max(...prices))}`;
  }
  return money(item.price);
}

function itemToppingCategories(item) {
  const ids = item.toppingCategoryIds || [];
  return ids
    .map(id => toppingCategories.find(category => category.id === id))
    .filter(Boolean);
}

function toppingSummary(selectedToppings) {
  return selectedToppings
    .filter(group => group.options.length)
    .map(group => `${group.categoryName}: ${group.options.map(optionLabel).join(", ")}`)
    .join(" | ");
}

function optionLabel(option) {
  return typeof option === "string" ? option : option.name;
}

function optionPrice(option) {
  return typeof option === "string" ? 0 : Number(option.price || 0);
}

function optionDisplay(option) {
  const price = optionPrice(option);
  return `${optionLabel(option)}${price ? ` (+${money(price)})` : ""}`;
}

function cartKeyFor(itemId, selectedToppings, variantName = "") {
  const toppingKey = selectedToppings
    .map(group => `${group.categoryId}:${group.options.map(optionLabel).join(",")}`)
    .join(";");
  return `${itemId}::${variantName}::${toppingKey}`;
}

function selectedToppingTotal(selectedToppings) {
  return selectedToppings.reduce((sum, group) => (
    sum + group.options.reduce((groupSum, option) => groupSum + optionPrice(option), 0)
  ), 0);
}

function getTotals() {
  const subtotal = cart.reduce((sum, line) => sum + line.linePrice * line.qty, 0);
  const tax = subtotal * taxRate;
  return { subtotal, tax, total: subtotal + tax };
}

function renderCart() {
  if (cart.length === 0) {
    $("#orderList").innerHTML = `<p class="empty">No items yet. Choose something delicious.</p>`;
  } else {
    $("#orderList").innerHTML = cart.map(line => `
      <div class="order-row">
        <div>
          <div class="item-title">${escapeHtml(line.name)}</div>
          ${line.variantName ? `<div class="item-detail">${escapeHtml(line.variantName)}</div>` : ""}
          <div class="item-detail">${money(line.linePrice)} each</div>
          ${toppingSummary(line.selectedToppings || []) ? `<div class="item-detail">${escapeHtml(toppingSummary(line.selectedToppings))}</div>` : ""}
        </div>
        <div class="qty-controls">
          <button type="button" data-decrease="${line.cartKey}" aria-label="Decrease ${escapeHtml(line.name)}">-</button>
          <strong>${line.qty}</strong>
          <button type="button" data-increase="${line.cartKey}" aria-label="Increase ${escapeHtml(line.name)}">+</button>
        </div>
      </div>
    `).join("");
  }

  const totals = getTotals();
  $("#subtotal").textContent = money(totals.subtotal);
  $("#tax").textContent = money(totals.tax);
  $("#total").textContent = money(totals.total);
}

function addToCart(itemId) {
  const item = menuItems.find(menuItem => menuItem.id === itemId);
  if (!item || item.outOfStock) return;
  const groups = itemToppingCategories(item);
  if (groups.length || item.variants?.length) {
    openToppingModal(item);
    return;
  }
  addConfiguredItemToCart(item, []);
}

function addConfiguredItemToCart(item, selectedToppings, variant = null) {
  const variantName = variant?.name || "";
  const basePrice = variant?.price ?? item.price;
  const linePrice = basePrice + selectedToppingTotal(selectedToppings);
  const cartKey = cartKeyFor(item.id, selectedToppings, variantName);
  const existing = cart.find(line => line.cartKey === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, cartKey, selectedToppings, variantName, linePrice, qty: 1 });
  }
  renderCart();
}

function changeQty(cartKey, amount) {
  const line = cart.find(item => item.cartKey === cartKey);
  if (!line) return;
  line.qty += amount;
  cart = cart.filter(item => item.qty > 0);
  renderCart();
}

function createOrder() {
  const totals = getTotals();
  return {
    id: String(Date.now()).slice(-6),
    customerName: $("#customerName").value.trim(),
    orderType: $("#orderType").value,
    notes: $("#orderNotes").value.trim(),
    items: cart.map(item => ({ ...item })),
    totals,
    createdAt: new Date()
  };
}

function renderSubmittedOrders() {
  if (submittedOrders.length === 0) {
    $("#submittedOrders").innerHTML = `<p class="empty">No submitted orders yet.</p>`;
    return;
  }

  $("#submittedOrders").innerHTML = submittedOrders.map(order => `
    <article class="submitted-card">
      <h3>#${order.id} - ${escapeHtml(order.customerName)}</h3>
      <p>${escapeHtml(order.orderType)} - ${order.items.reduce((sum, item) => sum + item.qty, 0)} items - ${money(order.totals.total)}</p>
      <p>${order.createdAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
      <button class="ghost-button" data-print="${order.id}">Print Tickets</button>
    </article>
  `).join("");
}

function ticketMarkup(order, type) {
  const isKitchen = type === "Kitchen";
  return `
    <div class="ticket">
      <h2>${type} Ticket</h2>
      <p>SoCal Tacos</p>
      <div class="dash"></div>
      <p>Order #${order.id}</p>
      <p>${escapeHtml(order.customerName)} - ${escapeHtml(order.orderType)}</p>
      <p>${order.createdAt.toLocaleString()}</p>
      <div class="dash"></div>
      ${order.items.map(item => `
        <div class="ticket-row">
          <strong>${item.qty}x ${escapeHtml(item.name)}</strong>
          ${isKitchen ? "" : `<span>${money(item.linePrice * item.qty)}</span>`}
        </div>
        ${item.variantName ? `<p>${escapeHtml(item.variantName)}</p>` : ""}
        ${toppingSummary(item.selectedToppings || []) ? `<p>${escapeHtml(toppingSummary(item.selectedToppings))}</p>` : ""}
      `).join("")}
      ${order.notes ? `<div class="dash"></div><h3>Notes</h3><p>${escapeHtml(order.notes)}</p>` : ""}
      ${isKitchen ? "" : `
        <div class="dash"></div>
        <div class="ticket-row"><span>Subtotal</span><span>${money(order.totals.subtotal)}</span></div>
        <div class="ticket-row"><span>Tax</span><span>${money(order.totals.tax)}</span></div>
        <div class="ticket-row"><strong>Total</strong><strong>${money(order.totals.total)}</strong></div>
      `}
      <div class="dash"></div>
      <p>${isKitchen ? "Prepare order" : "Thank you"}</p>
    </div>
  `;
}

function printTickets(order) {
  lastOrder = order;
  $("#printZone").innerHTML = ticketMarkup(order, "Kitchen") + ticketMarkup(order, "Customer");
  window.print();
}

function submitOrder(event) {
  event.preventDefault();
  if (cart.length === 0) {
    alert("Add at least one item before placing an order.");
    return;
  }

  const order = createOrder();
  submittedOrders.unshift(order);
  cart = [];
  $("#checkoutForm").reset();
  renderCart();
  renderSubmittedOrders();
  printTickets(order);
}

function addDemoOrder() {
  $("#customerName").value = "Alex";
  $("#orderType").value = "Takeout";
  $("#orderNotes").value = "No onions. Sauce on the side.";
  cart = [menuItems[0], menuItems[4], menuItems[8]]
    .filter(Boolean)
    .map((item, index) => ({
      ...item,
      cartKey: cartKeyFor(item.id, []),
      selectedToppings: [],
      variantName: "",
      linePrice: item.price,
      qty: index === 1 ? 2 : 1
    }));
  renderCart();
}

function renderOwnerTools() {
  $("#categoryOptions").innerHTML = [...new Set(menuItems.map(item => item.category))]
    .map(category => `<option value="${escapeHtml(category)}"></option>`)
    .join("");

  $("#ownerToppingChoices").innerHTML = toppingCategories.length
    ? toppingCategories.map(category => `
      <label>
        <input type="checkbox" value="${escapeHtml(category.id)}">
        ${escapeHtml(category.name)}
      </label>
    `).join("")
    : `<p class="empty">Create topping categories first.</p>`;

  $("#ownerItemList").innerHTML = menuItems.map((item, index) => `
    <article class="owner-item">
      ${imageMarkup(item.image, "owner-thumb", "No photo")}
      <div>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.category)} - ${money(item.price)}</p>
        <p>${escapeHtml(item.desc)}</p>
        ${item.outOfStock ? `<span class="stock-note">Out of stock</span>` : ""}
        ${item.badge ? `<span class="menu-badge">${escapeHtml(item.badge)}</span>` : ""}
        ${item.variants?.length ? `
          <div class="item-topping-tags">
            ${item.variants.map(variant => `<span class="tag">${escapeHtml(variant.name)} ${money(variant.price)}</span>`).join("")}
          </div>
        ` : ""}
        ${itemToppingCategories(item).length ? `
          <div class="item-topping-tags">
            ${itemToppingCategories(item).map(category => `<span class="tag">${escapeHtml(category.name)}</span>`).join("")}
          </div>
        ` : ""}
        <fieldset class="choice-panel item-choice-panel">
          <legend>Topping categories</legend>
          <div class="choice-list">
            ${toppingCategories.length ? toppingCategories.map(category => `
              <label>
                <input type="checkbox" data-item-topping-item="${item.id}" data-item-topping-category="${category.id}" ${(item.toppingCategoryIds || []).includes(category.id) ? "checked" : ""}>
                ${escapeHtml(category.name)}
              </label>
            `).join("") : `<span class="item-detail">No topping categories yet.</span>`}
          </div>
        </fieldset>
      </div>
      <div class="owner-actions">
        <button class="move-button" type="button" data-move-item="${item.id}" data-move-direction="up" ${index === 0 ? "disabled" : ""}>Up</button>
        <button class="move-button" type="button" data-move-item="${item.id}" data-move-direction="down" ${index === menuItems.length - 1 ? "disabled" : ""}>Down</button>
        <button class="secondary-button" type="button" data-edit-item="${item.id}">Edit</button>
        <button class="danger-button" type="button" data-remove-item="${item.id}">Remove</button>
      </div>
    </article>
  `).join("");
}

function renderToppingCategories() {
  $("#toppingCategoryList").innerHTML = toppingCategories.length
    ? toppingCategories.map(category => `
      <article class="topping-category-card">
        <div>
          <h3>${escapeHtml(category.name)}</h3>
          <div class="topping-tags">
            ${category.options.map(option => `<span class="tag">${escapeHtml(optionDisplay(option))}</span>`).join("")}
          </div>
        </div>
        <button class="danger-button" type="button" data-remove-topping-category="${category.id}">Remove</button>
      </article>
    `).join("")
    : `<p class="empty">No topping categories yet.</p>`;
}

function renderOwnerCategories() {
  const categories = orderedCategories();
  $("#ownerCategoryList").innerHTML = categories.length
    ? categories.map((category, index) => {
      const itemCount = menuItems.filter(item => item.category === category).length;
      return `
        <article class="menu-category-card">
          <div>
            <h3>${escapeHtml(category)}</h3>
            <p>${itemCount} item${itemCount === 1 ? "" : "s"}</p>
          </div>
          <div class="owner-actions">
            <button class="move-button" type="button" data-move-category="${escapeHtml(category)}" data-move-direction="up" ${index === 0 ? "disabled" : ""}>Up</button>
            <button class="move-button" type="button" data-move-category="${escapeHtml(category)}" data-move-direction="down" ${index === categories.length - 1 ? "disabled" : ""}>Down</button>
          </div>
        </article>
      `;
    }).join("")
    : `<p class="empty">No categories yet.</p>`;
}

function readSelectedImageFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve("");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function renderOwnerImagePreview(src) {
  $("#ownerImagePreview").innerHTML = src
    ? `<img src="${escapeHtml(src)}" alt="Selected menu item preview">`
    : "No picture selected";
}

async function getOwnerImage() {
  const file = $("#ownerItemImageFile").files[0];
  if (file) return readSelectedImageFile(file);
  return $("#ownerItemImageUrl").value.trim();
}

async function updateOwnerImagePreview() {
  try {
    renderOwnerImagePreview(await getOwnerImage());
  } catch {
    renderOwnerImagePreview("");
  }
}

async function getEditImage(existingImage) {
  const file = $("#editItemImageFile").files[0];
  if (file) return readSelectedImageFile(file);
  return $("#editItemImageUrl").value.trim() || existingImage || "";
}

async function updateEditImagePreview() {
  const item = menuItems.find(menuItem => menuItem.id === $("#editItemId").value);
  try {
    const image = await getEditImage(item?.image || "");
    $("#editImagePreview").innerHTML = image
      ? `<img src="${escapeHtml(image)}" alt="Selected menu item preview">`
      : "No picture selected";
  } catch {
    $("#editImagePreview").innerHTML = "No picture selected";
  }
}

function variantLines(variants) {
  return (variants || [])
    .map(variant => `${variant.name} = ${variant.price}`)
    .join("\n");
}

function parseVariants(value) {
  return value
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const parts = line.split("=");
      const name = parts[0].trim();
      const price = Number((parts[1] || "").trim());
      return name && !Number.isNaN(price) ? { name, price } : null;
    })
    .filter(Boolean);
}

function openEditItem(itemId) {
  const item = menuItems.find(menuItem => menuItem.id === itemId);
  if (!item) return;

  $("#editItemId").value = item.id;
  $("#editItemName").value = item.name || "";
  $("#editItemCategory").value = item.category || "";
  $("#editItemPrice").value = item.price ?? 0;
  $("#editItemBadge").value = item.badge || "";
  $("#editItemDesc").value = item.desc || "";
  $("#editItemImageUrl").value = item.image || "";
  $("#editItemImageFile").value = "";
  $("#editItemOutOfStock").checked = Boolean(item.outOfStock);
  $("#editItemVariants").value = variantLines(item.variants);
  $("#editImagePreview").innerHTML = item.image
    ? `<img src="${escapeHtml(item.image)}" alt="Selected menu item preview">`
    : "No picture selected";
  $("#editToppingChoices").innerHTML = toppingCategories.length
    ? toppingCategories.map(category => `
      <label>
        <input type="checkbox" value="${escapeHtml(category.id)}" ${(item.toppingCategoryIds || []).includes(category.id) ? "checked" : ""}>
        ${escapeHtml(category.name)}
      </label>
    `).join("")
    : `<p class="empty">Create topping categories first.</p>`;
  $("#editItemModal").classList.remove("hidden");
}

function closeEditItem() {
  $("#editItemModal").classList.add("hidden");
  $("#editItemForm").reset();
  $("#editImagePreview").innerHTML = "No picture selected";
}

async function saveEditedItem(event) {
  event.preventDefault();
  const itemId = $("#editItemId").value;
  const existingItem = menuItems.find(item => item.id === itemId);
  if (!existingItem) return;

  let image = "";
  try {
    image = await getEditImage(existingItem.image || "");
  } catch {
    alert("That picture could not be loaded. Try a different image.");
    return;
  }

  const name = $("#editItemName").value.trim();
  const category = $("#editItemCategory").value.trim();
  const price = Number($("#editItemPrice").value);
  const desc = $("#editItemDesc").value.trim();
  if (!name || !category || !desc || Number.isNaN(price)) return;

  const toppingCategoryIds = [...document.querySelectorAll("#editToppingChoices input:checked")]
    .map(input => input.value);
  const variants = parseVariants($("#editItemVariants").value);
  const updatedItem = {
    ...existingItem,
    name,
    category,
    price,
    desc,
    image,
    toppingCategoryIds,
    badge: $("#editItemBadge").value.trim(),
    outOfStock: $("#editItemOutOfStock").checked,
    variants
  };
  if (!updatedItem.badge) delete updatedItem.badge;
  if (!updatedItem.outOfStock) delete updatedItem.outOfStock;
  if (!updatedItem.variants.length) delete updatedItem.variants;

  menuItems = menuItems.map(item => item.id === itemId ? updatedItem : item);
  cart = cart.filter(line => line.id !== itemId);
  if (!saveMenuItems()) return;
  orderedCategories();
  saveCategoryOrder();
  renderCart();
  refreshMenuViews();
  closeEditItem();
}

async function addOwnerItem(event) {
  event.preventDefault();
  const name = $("#ownerItemName").value.trim();
  const category = $("#ownerItemCategory").value.trim();
  const price = Number($("#ownerItemPrice").value);
  const desc = $("#ownerItemDesc").value.trim();
  if (!name || !category || !desc || Number.isNaN(price)) return;

  let image = "";
  try {
    image = await getOwnerImage();
  } catch {
    alert("That picture could not be loaded. Try a different image.");
    return;
  }

  const baseId = slugify(name) || "menu-item";
  const id = `${baseId}-${Date.now().toString().slice(-5)}`;
  const toppingCategoryIds = [...document.querySelectorAll("#ownerToppingChoices input:checked")]
    .map(input => input.value);
  menuItems.push({ id, name, category, price, desc, image, toppingCategoryIds });
  if (!saveMenuItems()) {
    menuItems = menuItems.filter(item => item.id !== id);
    return;
  }
  orderedCategories();
  saveCategoryOrder();
  $("#ownerItemForm").reset();
  renderOwnerImagePreview("");
  refreshMenuViews();
}

function addToppingCategory(event) {
  event.preventDefault();
  const name = $("#toppingCategoryName").value.trim();
  const options = $("#toppingCategoryOptions").value
    .split(/\r?\n|,/)
    .map(option => option.trim())
    .filter(Boolean);
  if (!name || !options.length) return;

  const baseId = slugify(name) || "topping-category";
  const id = `${baseId}-${Date.now().toString().slice(-5)}`;
  toppingCategories.push({ id, name, options });
  if (!saveToppingCategories()) {
    toppingCategories = toppingCategories.filter(category => category.id !== id);
    return;
  }
  $("#toppingCategoryForm").reset();
  refreshMenuViews();
}

function removeOwnerItem(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  menuItems = menuItems.filter(item => item.id !== itemId);
  saveMenuItems();
  renderCart();
  refreshMenuViews();
}

function moveOwnerItem(itemId, direction) {
  const currentIndex = menuItems.findIndex(item => item.id === itemId);
  if (currentIndex < 0) return;

  const nextIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
  if (nextIndex < 0 || nextIndex >= menuItems.length) return;

  const reorderedItems = [...menuItems];
  const [movedItem] = reorderedItems.splice(currentIndex, 1);
  reorderedItems.splice(nextIndex, 0, movedItem);
  menuItems = reorderedItems;
  saveMenuItems();
  refreshMenuViews();
}

function moveOwnerCategory(category, direction) {
  const categories = orderedCategories();
  const currentIndex = categories.indexOf(category);
  if (currentIndex < 0) return;

  const nextIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
  if (nextIndex < 0 || nextIndex >= categories.length) return;

  const reorderedCategories = [...categories];
  const [movedCategory] = reorderedCategories.splice(currentIndex, 1);
  reorderedCategories.splice(nextIndex, 0, movedCategory);
  categoryOrder = reorderedCategories;
  saveCategoryOrder();
  refreshMenuViews();
}

function removeToppingCategory(categoryId) {
  toppingCategories = toppingCategories.filter(category => category.id !== categoryId);
  menuItems = menuItems.map(item => ({
    ...item,
    toppingCategoryIds: (item.toppingCategoryIds || []).filter(id => id !== categoryId)
  }));
  saveToppingCategories();
  saveMenuItems();
  refreshMenuViews();
}

function toggleItemToppingCategory(itemId, categoryId, checked) {
  menuItems = menuItems.map(item => {
    if (item.id !== itemId) return item;
    const existingIds = item.toppingCategoryIds || [];
    const toppingCategoryIds = checked
      ? [...new Set([...existingIds, categoryId])]
      : existingIds.filter(id => id !== categoryId);
    return { ...item, toppingCategoryIds };
  });
  saveMenuItems();
  refreshMenuViews();
}

function resetMenu() {
  if (!confirm("Reset the menu and topping categories back to the starter setup?")) return;
  menuItems = [...defaultMenuItems];
  toppingCategories = [...defaultToppingCategories];
  cart = [];
  saveMenuItems();
  saveToppingCategories();
  renderCart();
  refreshMenuViews();
}

function openToppingModal(item) {
  pendingToppingItemId = item.id;
  $("#toppingModalTitle").textContent = `Choose toppings for ${item.name}`;
  const variantMarkup = item.variants?.length ? `
    <section class="topping-group">
      <h3>Select an option</h3>
      <div class="choice-list">
        ${item.variants.map((variant, index) => `
          <label class="topping-option">
            <input type="radio" name="itemVariant" value="${escapeHtml(variant.name)}" data-price="${variant.price}" ${index === 0 ? "checked" : ""}>
            ${escapeHtml(variant.name)} - ${money(variant.price)}
          </label>
        `).join("")}
      </div>
    </section>
  ` : "";

  $("#toppingModalBody").innerHTML = variantMarkup + itemToppingCategories(item).map(category => `
    <section class="topping-group">
      <h3>${escapeHtml(category.name)}</h3>
      <div class="choice-list">
        ${category.options.map(option => `
          <label class="topping-option">
            <input type="checkbox" data-category-id="${escapeHtml(category.id)}" data-category-name="${escapeHtml(category.name)}" data-price="${optionPrice(option)}" value="${escapeHtml(optionLabel(option))}">
            ${escapeHtml(optionDisplay(option))}
          </label>
        `).join("")}
      </div>
    </section>
  `).join("");
  $("#toppingModal").classList.remove("hidden");
}

function closeToppingModal() {
  pendingToppingItemId = null;
  $("#toppingModal").classList.add("hidden");
  $("#toppingModalBody").innerHTML = "";
}

function submitToppings(event) {
  event.preventDefault();
  const item = menuItems.find(menuItem => menuItem.id === pendingToppingItemId);
  if (!item) {
    closeToppingModal();
    return;
  }

  const selectedToppings = itemToppingCategories(item).map(category => ({
    categoryId: category.id,
    categoryName: category.name,
    options: [...document.querySelectorAll(`#toppingModalBody input[data-category-id="${category.id}"]:checked`)]
      .map(input => ({ name: input.value, price: Number(input.dataset.price || 0) }))
  }));
  const variantInput = document.querySelector(`#toppingModalBody input[name="itemVariant"]:checked`);
  const variant = variantInput ? { name: variantInput.value, price: Number(variantInput.dataset.price || item.price) } : null;
  addConfiguredItemToCart(item, selectedToppings, variant);
  closeToppingModal();
}

function showPage(pageName) {
  const isOwnerPage = pageName === "owner";
  $("#orderPage").classList.toggle("hidden", isOwnerPage);
  $("#ownerPage").classList.toggle("hidden", !isOwnerPage);
  $("#orderViewBtn").classList.toggle("active", !isOwnerPage);
  $("#ownerViewBtn").classList.toggle("active", isOwnerPage);
}

document.addEventListener("click", event => {
  const addId = event.target.dataset.add;
  const increaseId = event.target.dataset.increase;
  const decreaseId = event.target.dataset.decrease;
  const printId = event.target.dataset.print;
  const removeItemId = event.target.dataset.removeItem;
  const editItemId = event.target.dataset.editItem;
  const moveItemId = event.target.dataset.moveItem;
  const moveCategory = event.target.dataset.moveCategory;
  const moveDirection = event.target.dataset.moveDirection;
  const removeToppingCategoryId = event.target.dataset.removeToppingCategory;

  if (addId) addToCart(addId);
  if (increaseId) changeQty(increaseId, 1);
  if (decreaseId) changeQty(decreaseId, -1);
  if (moveItemId) moveOwnerItem(moveItemId, moveDirection);
  if (moveCategory) moveOwnerCategory(moveCategory, moveDirection);
  if (editItemId) openEditItem(editItemId);
  if (removeItemId) removeOwnerItem(removeItemId);
  if (removeToppingCategoryId) removeToppingCategory(removeToppingCategoryId);
  if (printId) {
    const order = submittedOrders.find(item => item.id === printId);
    if (order) printTickets(order);
  }
});

document.addEventListener("change", event => {
  const itemId = event.target.dataset.itemToppingItem;
  const categoryId = event.target.dataset.itemToppingCategory;
  if (itemId && categoryId) {
    toggleItemToppingCategory(itemId, categoryId, event.target.checked);
  }
});

$("#checkoutForm").addEventListener("submit", submitOrder);
$("#ownerItemForm").addEventListener("submit", addOwnerItem);
$("#editItemForm").addEventListener("submit", saveEditedItem);
$("#toppingCategoryForm").addEventListener("submit", addToppingCategory);
$("#toppingForm").addEventListener("submit", submitToppings);
$("#cancelToppingsBtn").addEventListener("click", closeToppingModal);
$("#cancelEditItemBtn").addEventListener("click", closeEditItem);
$("#clearCartBtn").addEventListener("click", () => {
  cart = [];
  renderCart();
});
$("#demoOrderBtn").addEventListener("click", addDemoOrder);
$("#resetMenuBtn").addEventListener("click", resetMenu);
$("#orderViewBtn").addEventListener("click", () => showPage("order"));
$("#ownerViewBtn").addEventListener("click", () => showPage("owner"));
$("#ownerItemImageUrl").addEventListener("input", updateOwnerImagePreview);
$("#ownerItemImageFile").addEventListener("change", updateOwnerImagePreview);
$("#editItemImageUrl").addEventListener("input", updateEditImagePreview);
$("#editItemImageFile").addEventListener("change", updateEditImagePreview);
$("#printLastBtn").addEventListener("click", () => {
  if (lastOrder) {
    printTickets(lastOrder);
  } else {
    alert("No ticket has been printed yet.");
  }
});

refreshMenuViews();
renderCart();
renderSubmittedOrders();
