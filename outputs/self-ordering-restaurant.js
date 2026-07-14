const defaultMenuItems = [
  { id: "can-drink", name: "Can Drink", category: "DRINKS", price: 1, desc: "Cold canned drink.", image: "", variants: [{ name: "Can", price: 1 }, { name: "Glass Bottle", price: 3 }] },
  { id: "homemade-drinks", name: "Homemade Lemonade / Agua Fresca", category: "DRINKS", price: 4, desc: "Fresh handmade agua frescas and homemade lemonade.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/AIIOTSGQNEBBLTYAJ5VU4KBL.jpeg?width=640&optimize=medium", toppingCategoryIds: ["agua-frescas"] },
  { id: "breakfast-taco", name: "Breakfast taco", category: "BREAKFAST", price: 4.5, desc: "Breakfast taco from the SoCal Tacos breakfast menu.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/UM5UDPOAYLWJQIVT7K6TO3MB.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"] },
  { id: "breakfast-burrito", name: "Breakfast burrito", category: "BREAKFAST", price: 8, desc: "Breakfast burrito from the SoCal Tacos breakfast menu.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/HAEMTJ4ZP25ACOT7VT6ZS3QU.png?width=640&optimize=medium", toppingCategoryIds: ["no-shell-toppings"] },
  { id: "quesadilla", name: "Quesadilla", category: "QUESADILLA", price: 7, desc: "Plain or loaded quesadilla. Choose meat at no extra charge.", image: "", toppingCategoryIds: ["quesadilla-meats", "quesadilla-toppings"], variants: [{ name: "Plain", price: 7 }, { name: "Loaded", price: 14 }] },
  { id: "pork-taco", name: "Pork taco", category: "TACOS", price: 5, desc: "Choose one taco or a three taco plate.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/QS2LHOTOLEK64X5NHSKB3VCS.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "1 Pork Taco", price: 5 }, { name: "3 Pork Tacos", price: 13 }] },
  { id: "chicken-taco", name: "Chicken taco", category: "TACOS", price: 5, desc: "Choose one taco or a three taco plate.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/LNXII34WYGXEFLEWWHRU4NBA.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "1 Chicken Taco", price: 5 }, { name: "3 Chicken Tacos", price: 13 }] },
  { id: "chorizo-taco", name: "Chorizo taco", category: "TACOS", price: 6, desc: "Choose one taco or a three taco plate.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/RLK4VMZBHH3YPI73KFYLMKMM.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "1 Chorizo Taco", price: 6 }, { name: "3 Chorizo Tacos", price: 15 }] },
  { id: "al-pastor-tacos", name: "Al pastor tacos", category: "TACOS", price: 6, desc: "Choose one taco or a three taco plate.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/ZQFFEBTTRQL6PERXUP7HGWC7.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "1 Al Pastor Taco", price: 6 }, { name: "3 Al Pastor Tacos", price: 15 }] },
  { id: "vegan-chorizo-tacos", name: "Vegan chorizo tacos", category: "TACOS", price: 6, desc: "Choose one taco or a three taco plate.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/L67FL2ATZQSUAGLNJNUABZC3.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "1 Vegan Chorizo Taco", price: 6 }, { name: "3 Vegan Chorizo Tacos", price: 16 }] },
  { id: "ground-beef-tacos", name: "Ground Beef tacos", category: "TACOS", price: 6, desc: "Choose one taco or a three taco plate.", image: "", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "1 Ground Beef Taco", price: 6 }, { name: "3 Ground Beef Tacos", price: 15 }] },
  { id: "lengua-tacos", name: "(Lengua) beef Tongue tacos", category: "TACOS", price: 6, desc: "Choose one taco or a three taco plate.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/CK476NVFAZAHSSFDGS4T35S6.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "1 Lengua Taco", price: 6 }, { name: "3 Lengua Tacos", price: 16 }], badge: "Sale" },
  { id: "la-dog", name: "La dog", category: "HOT DOG", price: 6, desc: "SoCal-style LA dog.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/L2RJACUXOWPSHE4RACMWWANZ.jpeg?width=640&optimize=medium" },
  { id: "cali-burger", name: "Cali Burger", category: "BURGERS", price: 13, desc: "Comes with animal fries or plain fries. Full size has 3 patties, avocado, lettuce, tomato, grilled onions, and cheese.", image: "", toppingCategoryIds: ["burger-toppings"], variants: [{ name: "JR Cali Burger", price: 13 }, { name: "Cali Burger", price: 16 }] },
  { id: "socal-bowl", name: "SoCal Bowl", category: "BOWLS", price: 16, desc: "Rice, beans, toppings, guac, and meat priced like large burritos.", image: "", toppingCategoryIds: ["bowl-toppings"], variants: [{ name: "Chicken", price: 16 }, { name: "Pork", price: 16 }, { name: "Chorizo", price: 17 }, { name: "Ground Beef", price: 17 }, { name: "Al Pastor", price: 17 }, { name: "Barbacoa", price: 19 }, { name: "Tongue", price: 19 }, { name: "Steak", price: 20 }, { name: "Lamb", price: 20 }, { name: "Steak and Shrimp", price: 20 }] },
  { id: "lamb-birria-taco", name: "Lamb birria Taco", category: "TACOS", price: 7, desc: "Choose one taco or a three taco plate.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/CXB3QK7QRCF6INZUPGE35VI5.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "1 Lamb Birria Taco", price: 7 }, { name: "3 Lamb Birria Tacos", price: 18 }] },
  { id: "shrimp-steak-tacos", name: "Shrimp and steak tacos", category: "TACOS", price: 7, desc: "Choose one taco or a three taco plate.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/7MLVGRNLW6CBAWXV5BUWCNKS.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "1 Shrimp and Steak Taco", price: 7 }, { name: "3 Shrimp and Steak Tacos", price: 18 }] },
  { id: "steak-tacos", name: "Steak tacos", category: "TACOS", price: 7, desc: "Choose one taco or a three taco plate.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/AFEKHUPXLYOIVPTORSNLUKHI.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "1 Steak Taco", price: 7 }, { name: "3 Steak Tacos", price: 18 }] },
  { id: "small-tacos", name: "Small Tacos", category: "TACOS", price: 10, desc: "Three small tacos. Choose chicken, pork, chorizo, ground beef, or steak.", image: "", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "Chicken", price: 10 }, { name: "Pork", price: 10 }, { name: "Chorizo", price: 10 }, { name: "Ground Beef", price: 10 }, { name: "Steak", price: 12 }] },
  { id: "burritos", name: "Burritos", category: "BURRITOS", price: 11, desc: "Choose JR, small, or large burrito with your meat.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/HAEMTJ4ZP25ACOT7VT6ZS3QU.png?width=640&optimize=medium", toppingCategoryIds: ["no-shell-toppings"], variants: [{ name: "JR Chicken", price: 11 }, { name: "JR Pork", price: 11 }, { name: "JR Chorizo", price: 12 }, { name: "JR Ground Beef", price: 12 }, { name: "JR Al Pastor", price: 12 }, { name: "JR Barbacoa", price: 13 }, { name: "JR Tongue", price: 13 }, { name: "JR Steak", price: 15 }, { name: "JR Lamb", price: 15 }, { name: "JR Steak and Shrimp", price: 15 }, { name: "Small Chicken", price: 12 }, { name: "Small Pork", price: 12 }, { name: "Small Chorizo", price: 13 }, { name: "Small Ground Beef", price: 13 }, { name: "Small Al Pastor", price: 13 }, { name: "Small Barbacoa", price: 14 }, { name: "Small Tongue", price: 14 }, { name: "Small Steak", price: 16 }, { name: "Small Lamb", price: 16 }, { name: "Small Steak and Shrimp", price: 16 }, { name: "Large Chicken", price: 16 }, { name: "Large Pork", price: 16 }, { name: "Large Chorizo", price: 17 }, { name: "Large Ground Beef", price: 17 }, { name: "Large Al Pastor", price: 17 }, { name: "Large Barbacoa", price: 19 }, { name: "Large Tongue", price: 19 }, { name: "Large Steak", price: 20 }, { name: "Large Lamb", price: 20 }, { name: "Large Steak and Shrimp", price: 20 }] },
  { id: "asada-fries", name: "Asada Fries", category: "ASADA FRIES", price: 16, desc: "Crispy fries topped with carne asada, cheese, pico, salsa, sour cream, and guac. Choose meat pricing like large burritos.", image: "", toppingCategoryIds: ["asada-fries-toppings"], variants: [{ name: "Chicken", price: 16 }, { name: "Pork", price: 16 }, { name: "Chorizo", price: 17 }, { name: "Ground Beef", price: 17 }, { name: "Al Pastor", price: 17 }, { name: "Barbacoa", price: 19 }, { name: "Tongue", price: 19 }, { name: "Steak", price: 20 }, { name: "Lamb", price: 20 }, { name: "Steak and Shrimp", price: 20 }] },
  { id: "doritos-asada", name: "Doritos Asada", category: "DORITOS ASADA", price: 13, desc: "Doritos, cheese, pico, and guac with your choice of meat.", image: "", toppingCategoryIds: ["no-shell-toppings"], variants: [{ name: "Chicken", price: 13 }, { name: "Pork", price: 13 }, { name: "Chorizo", price: 15 }, { name: "Ground Beef", price: 15 }, { name: "Al Pastor", price: 15 }, { name: "Vegan Chorizo", price: 15 }, { name: "Barbacoa", price: 16 }, { name: "Tongue", price: 16 }, { name: "Steak", price: 18 }, { name: "Lamb", price: 18 }, { name: "Steak and Shrimp", price: 18 }] },
  { id: "street-corn", name: "Street corn", category: "SIDES", price: 6, desc: "Street corn from the SoCal Tacos menu.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/WM6WF22MK2VDFYBNB272YSD5.jpeg?width=640&optimize=medium" },
  { id: "rice-beans", name: "Rice & Beans", category: "SIDES", price: 5, desc: "Side of rice and beans.", image: "", toppingCategoryIds: ["bowl-toppings"] },
  { id: "plain-fries", name: "Plain Fries", category: "SIDES", price: 5, desc: "Plain crispy fries.", image: "", toppingCategoryIds: ["burger-toppings"] },
  { id: "barbacoa-beef-cheeks", name: "barbacoa beef cheeks", category: "TACOS", price: 6, desc: "Choose one taco or a three taco plate.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/LXS7VB2T5ZTBFACNLESBXGTI.jpeg?width=640&optimize=medium", toppingCategoryIds: ["taco-toppings"], variants: [{ name: "1 Barbacoa Beef Cheek Taco", price: 6 }, { name: "3 Barbacoa Beef Cheek Tacos", price: 16 }] },
  { id: "guacamole-chips", name: "Guacamole and chips", category: "SIDES", price: 5, desc: "Fresh, creamy guacamole made with real avocados, lime, and a pinch of spice.", image: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/ULDOA6QPOJG4TP2HLQAGL2LH.jpeg?width=640&optimize=medium", variants: [{ name: "5oz", price: 5 }, { name: "16oz", price: 7 }], badge: "Sale" }
];

const defaultToppingCategories = [
  { id: "taco-toppings", name: "Toppings", options: ["corn tortilla Shell", "flour tortilla Shell", "Romain Lettuce Leaf Shell", "cilantro", "melted chesse", "lime", "Pickled Onions", "Mild salsa", "Spicy Habanero", "Very Spicy Chili De Arbol", "sour cream", { name: "5oz Small Guacamole And Chips", price: 5 }, { name: "16oz Large Guac and chips", price: 7 }] },
  { id: "no-shell-toppings", name: "Toppings", options: ["cilantro", "melted chesse", "lime", "Pickled Onions", "Mild salsa", "Spicy Habanero", "Very Spicy Chili De Arbol", "sour cream", { name: "5oz Small Guacamole And Chips", price: 5 }, { name: "16oz Large Guac and chips", price: 7 }] },
  { id: "quesadilla-meats", name: "Quesadilla Meat", options: ["No meat", "Chicken", "Pork", "Chorizo", "Ground Beef", "Al Pastor", "Vegan Chorizo", "Barbacoa", "Tongue", "Steak", "Lamb", "Steak and Shrimp"] },
  { id: "quesadilla-toppings", name: "Quesadilla Toppings", options: ["cilantro", "melted chesse", "lime", "Pickled Onions", "Mild salsa", "Spicy Habanero", "Very Spicy Chili De Arbol", "sour cream", { name: "5oz Small Guacamole And Chips", price: 5 }, { name: "16oz Large Guac and chips", price: 7 }] },
  { id: "asada-fries-toppings", name: "Asada Fries Toppings", options: ["cilantro", "melted chesse", "lime", "Pickled Onions", "Mild salsa", "Spicy Habanero", "Very Spicy Chili De Arbol", "sour cream", { name: "5oz Small Guacamole And Chips", price: 5 }, { name: "16oz Large Guac and chips", price: 7 }] },
  { id: "burger-toppings", name: "Burger Toppings", options: ["lettuce", "tomato", "Pickled Onions", "grilled onions", "cheese", "sour cream", "Mild salsa", "Spicy Habanero", { name: "5oz Small Guacamole And Chips", price: 5 }] },
  { id: "bowl-toppings", name: "Bowl Toppings", options: ["rice", "beans", "cilantro", "Pickled Onions", "lettuce", "cheese", "sour cream", "Mild salsa", "Spicy Habanero", "Very Spicy Chili De Arbol", { name: "5oz Small Guacamole And Chips", price: 5 }, { name: "16oz Large Guac and chips", price: 7 }] },
  { id: "agua-frescas", name: "Agua Frescas", options: ["Watermelon", "Pineapple", "Mango", "Horchata", "Guava"] }
];

const menuStorageKey = "counterserveMenuItems";
const toppingStorageKey = "counterserveToppingCategories";
const categoryOrderStorageKey = "counterserveCategoryOrder";
const orderHistoryStorageKey = "counterserveOrderHistory";
const menuVersionKey = "counterserveMenuVersion";
const languageStorageKey = "socalTacosLanguage";
const orderEmailAddress = "so.cal.taco.pa@gmail.com";
const currentMenuVersion = "socal-tacos-menu-2026-07-13-one-page-counter-menu";
const retiredMenuItemIds = ["mix-three-tacos"];
const taxRate = 0.0825;
let menuItems;
let toppingCategories;
let categoryOrder;
let cart = [];
let submittedOrders = loadOrderHistory();
let lastOrder = null;
let pendingToppingItemId = null;
let orderSummaryTimer = null;
let checkoutStep = 0;
let inactivityTimer = null;
const categorySlideIndexes = {};
let activeCustomerCategory = null;
let currentLanguage = localStorage.getItem(languageStorageKey) || "en";

const translations = {
  en: {
    selfOrdering: "Self ordering kiosk",
    orderPage: "Order Page",
    simpleMenu: "One Page Menu",
    orderHistory: "Order History",
    ownerPage: "Owner Page",
    print: "Print",
    freshFlavor: "Fresh coastal flavor",
    tapItems: "Tap items to order",
    socalTicket: "SoCal ticket",
    currentOrder: "Current Order",
    clear: "Clear",
    reviewOrder: "Review your order",
    emptyCart: "No items yet. Choose something delicious.",
    customerName: "Customer name",
    namePlaceholder: "Name for the order",
    phoneNumber: "Phone number",
    optional: "(optional)",
    phonePlaceholder: "Phone number for pickup",
    orderType: "Order type",
    dineIn: "Dine in",
    takeout: "Takeout",
    delivery: "Delivery",
    notes: "Notes",
    notesPlaceholder: "Allergies, sauces, special prep",
    readyToSend: "Ready to send?",
    reviewTotal: "Review your total and place the order.",
    subtotal: "Subtotal",
    tax: "Tax",
    total: "Total",
    back: "Back",
    next: "Next",
    placeOrder: "Place Order",
    add: "Add",
    out: "Out",
    chooseSize: "Choose a size",
    chooseMeats: "Choose 3 meats",
    tapCard: "Tap card to add",
    allCategories: "BACK TO CATEGORIES",
    items: "items",
    item: "item",
    step: "Step",
    of: "of",
    customer: "Customer",
    addBeforeNext: "Add at least one item before going next.",
    enterName: "Enter the customer name first.",
    orderSent: "Order sent",
    orderSummary: "Order Summary",
    close: "Close",
    done: "Done",
    thankYou: "Thank you",
    sent: "Your order was sent",
    payAfterFood: "Pay after your food is ready. Please take a seat. We'll call your name.",
    howMany: "How many?",
    selectOption: "Select an option",
    chooseToppings: "Choose toppings for",
    addToOrder: "Add To Order",
    cancel: "Cancel",
    each: "each",
    noTicket: "No ticket has been printed yet."
  },
  es: {
    selfOrdering: "Kiosco de pedido",
    orderPage: "Ordenar",
    simpleMenu: "Menú grande",
    orderHistory: "Historial",
    ownerPage: "Dueño",
    print: "Imprimir",
    freshFlavor: "Sabor fresco",
    tapItems: "Toque artículos para ordenar",
    socalTicket: "Ticket SoCal",
    currentOrder: "Orden actual",
    clear: "Borrar",
    reviewOrder: "Revise su orden",
    emptyCart: "Todavía no hay artículos.",
    customerName: "Nombre",
    namePlaceholder: "Nombre para la orden",
    phoneNumber: "Teléfono",
    optional: "(opcional)",
    phonePlaceholder: "Teléfono para recoger",
    orderType: "Tipo de orden",
    dineIn: "Comer aquí",
    takeout: "Para llevar",
    delivery: "Entrega",
    notes: "Notas",
    notesPlaceholder: "Alergias, salsas, preparación especial",
    readyToSend: "¿Lista para enviar?",
    reviewTotal: "Revise el total y mande la orden.",
    subtotal: "Subtotal",
    tax: "Impuesto",
    total: "Total",
    back: "Atrás",
    next: "Siguiente",
    placeOrder: "Mandar orden",
    add: "Agregar",
    out: "Agotado",
    chooseSize: "Elija una opción",
    chooseMeats: "Elija 3 carnes",
    tapCard: "Toque la tarjeta para agregar",
    allCategories: "VOLVER A CATEGORÍAS",
    items: "artículos",
    item: "artículo",
    step: "Paso",
    of: "de",
    customer: "Cliente",
    addBeforeNext: "Agregue al menos un artículo antes de seguir.",
    enterName: "Escriba el nombre primero.",
    orderSent: "Orden enviada",
    orderSummary: "Resumen de orden",
    close: "Cerrar",
    done: "Listo",
    thankYou: "Gracias",
    sent: "Su orden fue enviada",
    payAfterFood: "Pague cuando la comida esté lista. Tome asiento. Llamaremos su nombre.",
    howMany: "¿Cuántos?",
    selectOption: "Seleccione una opción",
    chooseToppings: "Elija ingredientes para",
    addToOrder: "Agregar a la orden",
    cancel: "Cancelar",
    each: "cada uno",
    noTicket: "Todavía no se ha impreso un ticket."
  },
  zh: {
    selfOrdering: "自助点餐",
    orderPage: "点餐",
    orderHistory: "订单记录",
    ownerPage: "店主管理",
    print: "打印",
    freshFlavor: "新鲜风味",
    tapItems: "点击菜品点餐",
    socalTicket: "SoCal 小票",
    currentOrder: "当前订单",
    clear: "清空",
    reviewOrder: "确认订单",
    emptyCart: "还没有菜品，请选择。",
    customerName: "姓名",
    namePlaceholder: "订单姓名",
    phoneNumber: "电话号码",
    optional: "（可选）",
    phonePlaceholder: "取餐电话号码",
    orderType: "订单类型",
    dineIn: "堂食",
    takeout: "外带",
    delivery: "外送",
    notes: "备注",
    notesPlaceholder: "过敏、酱料、特别要求",
    readyToSend: "准备提交？",
    reviewTotal: "请确认总价并提交订单。",
    subtotal: "小计",
    tax: "税",
    total: "总计",
    back: "返回",
    next: "下一步",
    placeOrder: "提交订单",
    add: "添加",
    out: "售完",
    chooseSize: "选择选项",
    chooseMeats: "选择3种肉",
    tapCard: "点击卡片添加",
    allCategories: "返回分类",
    items: "项",
    item: "项",
    step: "步骤",
    of: "/",
    customer: "顾客",
    addBeforeNext: "请先添加至少一项。",
    enterName: "请先输入姓名。",
    orderSent: "订单已发送",
    orderSummary: "订单摘要",
    close: "关闭",
    done: "完成",
    thankYou: "谢谢",
    sent: "您的订单已发送",
    payAfterFood: "餐点做好后付款。请入座。我们会叫您的名字。",
    howMany: "数量？",
    selectOption: "选择选项",
    chooseToppings: "选择配料：",
    addToOrder: "加入订单",
    cancel: "取消",
    each: "每个",
    noTicket: "还没有打印小票。"
  }
};

const t = key => translations[currentLanguage]?.[key] || translations.en[key] || key;
const orderTypeLabel = value => ({
  "Dine in": t("dineIn"),
  "Takeout": t("takeout"),
  "Delivery": t("delivery")
}[value] || value);

const money = value => value.toLocaleString("en-US", { style: "currency", currency: "USD" });
const $ = selector => document.querySelector(selector);
const on = (selector, eventName, handler) => {
  const element = $(selector);
  if (element) element.addEventListener(eventName, handler);
};
const setText = (selector, value) => {
  const element = $(selector);
  if (element) element.textContent = value;
};
const toggleClass = (selector, className, force) => {
  const element = $(selector);
  if (element) element.classList.toggle(className, force);
};
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
const fallbackImages = [
  { keywords: ["drink", "agua", "horchata", "mango", "watermelon", "pineapple", "guava"], src: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/AIIOTSGQNEBBLTYAJ5VU4KBL.jpeg?width=640&optimize=medium" },
  { keywords: ["burger"], src: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/L2RJACUXOWPSHE4RACMWWANZ.jpeg?width=640&optimize=medium" },
  { keywords: ["bowl"], src: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/7MLVGRNLW6CBAWXV5BUWCNKS.jpeg?width=640&optimize=medium" },
  { keywords: ["burrito"], src: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/HAEMTJ4ZP25ACOT7VT6ZS3QU.png?width=640&optimize=medium" },
  { keywords: ["dog", "hot dog"], src: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/L2RJACUXOWPSHE4RACMWWANZ.jpeg?width=640&optimize=medium" },
  { keywords: ["fries", "doritos"], src: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/AFEKHUPXLYOIVPTORSNLUKHI.jpeg?width=640&optimize=medium" },
  { keywords: ["corn", "elote"], src: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/WM6WF22MK2VDFYBNB272YSD5.jpeg?width=640&optimize=medium" },
  { keywords: ["guac", "chips"], src: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/ULDOA6QPOJG4TP2HLQAGL2LH.jpeg?width=640&optimize=medium" },
  { keywords: ["steak", "mix", "taco", "lunch"], src: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/AFEKHUPXLYOIVPTORSNLUKHI.jpeg?width=640&optimize=medium" },
  { keywords: ["breakfast"], src: "https://148597173.cdn6.editmysite.com/uploads/1/4/8/5/148597173/UM5UDPOAYLWJQIVT7K6TO3MB.jpeg?width=640&optimize=medium" }
];
const fallbackImageForItem = item => {
  const searchText = `${item.name || ""} ${item.category || ""} ${item.desc || ""}`.toLowerCase();
  return fallbackImages.find(fallback => fallback.keywords.some(keyword => searchText.includes(keyword)))?.src || "socal-tacos-logo-cropped.png";
};
const imageForItem = item => item.image || fallbackImageForItem(item);

menuItems = loadMenuItems();
toppingCategories = loadToppingCategories();
categoryOrder = loadCategoryOrder();

function loadMenuItems() {
  const savedItems = localStorage.getItem(menuStorageKey);
  if (!savedItems) {
    const starterItems = fillMissingItemImages(normalizeMenuItems(defaultMenuItems)).items;
    localStorage.setItem(menuStorageKey, JSON.stringify(starterItems));
    localStorage.setItem(menuVersionKey, currentMenuVersion);
    return starterItems;
  }

  let parsedItems = [];
  try {
    parsedItems = JSON.parse(savedItems);
  } catch {
    parsedItems = [];
  }

  const normalizedItems = Array.isArray(parsedItems) && parsedItems.length > 0 ? normalizeMenuItems(parsedItems) : normalizeMenuItems(defaultMenuItems);
  const activeItems = removeRetiredMenuItems(normalizedItems);
  const starterUpdatedItems = applyStarterMenuUpdates(activeItems.items);
  const updatedItems = addMissingStarterItems(starterUpdatedItems);
  const mergedItems = combineCaliBurgerSizes(updatedItems.items);
  const categorizedItems = migrateMenuCategories(mergedItems.items);
  const imageItems = fillMissingItemImages(categorizedItems.items);
  localStorage.setItem(menuStorageKey, JSON.stringify(imageItems.items));
  localStorage.setItem(menuVersionKey, currentMenuVersion);
  return imageItems.items;
}

function migrateMenuCategories(items) {
  let changed = false;
  const migratedItems = items.map(item => {
    let category = item.category;
    if (item.id === "quesadilla") category = "QUESADILLA";
    else if (item.id === "doritos-asada") category = "DORITOS ASADA";
    else if (item.id === "la-dog") category = "HOT DOG";
    else if (item.id === "asada-fries") category = "ASADA FRIES";
    else if (category === "LUNCH") category = "TACOS";
    if (category === item.category) return item;
    changed = true;
    return { ...item, category };
  });
  return { items: migratedItems, changed };
}

function removeRetiredMenuItems(items) {
  const activeItems = items.filter(item => !retiredMenuItemIds.includes(item.id));
  return { items: activeItems, changed: activeItems.length !== items.length };
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

function applyStarterMenuUpdates(items) {
  return items.map(item => {
    const starterItem = defaultMenuItems.find(defaultItem => defaultItem.id === item.id);
    if (!starterItem) return item;
    const updatedItem = {
      ...item,
      ...starterItem,
      image: item.image || starterItem.image
    };
    if (!starterItem.badge) delete updatedItem.badge;
    if (!starterItem.outOfStock) delete updatedItem.outOfStock;
    return updatedItem;
  });
}

function addMissingStarterItems(items) {
  const additions = defaultMenuItems
    .filter(defaultItem => !items.some(item => item.id === defaultItem.id));
  if (!additions.length) return { items, changed: false };

  const nextItems = [...items, ...additions];
  return { items: nextItems, changed: true };
}

function fillMissingItemImages(items) {
  let changed = false;
  const filledItems = items.map(item => {
    if (item.image) return item;
    changed = true;
    return { ...item, image: fallbackImageForItem(item) };
  });
  return { items: filledItems, changed };
}

function loadToppingCategories() {
  const savedCategories = localStorage.getItem(toppingStorageKey);
  if (!savedCategories) return [...defaultToppingCategories];

  try {
    const parsedCategories = JSON.parse(savedCategories);
    if (!Array.isArray(parsedCategories)) return [...defaultToppingCategories];
    return [
      ...parsedCategories,
      ...defaultToppingCategories.filter(defaultCategory => !parsedCategories.some(category => category.id === defaultCategory.id))
    ];
  } catch {
    return [...defaultToppingCategories];
  }
}

function loadCategoryOrder() {
  const defaultOrder = uniqueCategories(defaultMenuItems);
  const savedOrder = localStorage.getItem(categoryOrderStorageKey);
  if (!savedOrder) return defaultOrder;

  try {
    const parsedOrder = JSON.parse(savedOrder);
    return Array.isArray(parsedOrder) ? parsedOrder : defaultOrder;
  } catch {
    return defaultOrder;
  }
}

function loadOrderHistory() {
  const savedOrders = localStorage.getItem(orderHistoryStorageKey);
  if (!savedOrders) return [];

  try {
    const parsedOrders = JSON.parse(savedOrders);
    if (!Array.isArray(parsedOrders)) return [];
    return parsedOrders.map(order => ({
      ...order,
      createdAt: new Date(order.createdAt)
    }));
  } catch {
    return [];
  }
}

function saveOrderHistory() {
  try {
    localStorage.setItem(orderHistoryStorageKey, JSON.stringify(submittedOrders));
    return true;
  } catch {
    alert("The order history could not be saved.");
    return false;
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
  renderSimpleMenu();
  renderOwnerTools();
  renderToppingCategories();
  renderOwnerCategories();
}

function renderMenu() {
  const menuGrid = $("#menuGrid");
  if (!menuGrid) return;
  menuGrid.classList.add("stage-overview", "category-columns");
  menuGrid.classList.remove("stage-category");

  const visibleItems = orderedMenuItems();
  const categories = orderedCategories();

  if (activeCustomerCategory && categories.includes(activeCustomerCategory)) {
    const categoryItems = visibleItems.filter(item => item.category === activeCustomerCategory);
    menuGrid.classList.remove("category-columns");
    menuGrid.classList.add("stage-category", "category-item-grid");
    menuGrid.innerHTML = `
      <button class="category-back" type="button" data-close-category="true">&lsaquo; ${t("allCategories")}</button>
      <h3 class="category-view-title">${escapeHtml(activeCustomerCategory)}</h3>
      ${categoryItems.map((item, index) => menuItemCardMarkup(item, index)).join("")}
    `;
    return;
  }

  activeCustomerCategory = null;
  menuGrid.classList.remove("stage-category", "category-item-grid");
  menuGrid.innerHTML = categories.map((category, categoryIndex) => {
    const items = visibleItems.filter(item => item.category === category);
    const currentIndex = (categorySlideIndexes[category] || 0) % items.length;
    const item = items[currentIndex];

    return `
      <button class="category-showcase" type="button" data-open-category="${escapeHtml(category)}" style="animation-delay: ${categoryIndex * 55}ms">
        <span class="category-preview">${items.map((previewItem, index) => `<img class="${index === currentIndex ? "active" : ""}" src="${escapeHtml(imageForItem(previewItem))}" alt="">`).join("")}</span>
        <span class="category-showcase-name">${escapeHtml(category)}</span>
        <span class="category-showcase-count">${items.length} ${items.length === 1 ? t("item") : t("items")}</span>
        <span class="slide-dots" aria-hidden="true">${items.map((unused, index) => `<i class="${index === currentIndex ? "active" : ""}"></i>`).join("")}</span>
      </button>
    `;
  }).join("");
}

function menuItemCardMarkup(item, index) {
  return `
    <article class="menu-card ${item.outOfStock ? "is-disabled" : ""}" ${item.outOfStock ? "" : `data-add-card="${item.id}" data-tap-label="${escapeHtml(t("tapCard"))}" role="button" tabindex="0"`} style="animation-delay: ${index * 35}ms">
      ${imageMarkup(imageForItem(item), "menu-photo", "Photo")}
      <div class="menu-card-body">
        ${item.badge ? `<span class="menu-badge">${escapeHtml(item.badge)}</span>` : ""}
        <h3>${escapeHtml(item.name)}</h3>
        <p class="item-description">${escapeHtml(item.desc)}</p>
        ${item.outOfStock ? `<p class="stock-note">Out of stock</p>` : ""}
        ${item.tacoMix ? `<p class="item-detail">${t("chooseMeats")}</p>` : ""}
        ${item.variants?.length ? `<p class="item-detail">${t("chooseSize")}</p>` : ""}
      </div>
      <div class="menu-card-footer">
        <span class="price">${priceText(item)}</span>
        <button class="add-button" data-add="${item.id}" ${item.outOfStock ? "disabled" : ""}>${item.outOfStock ? t("out") : t("add")}</button>
      </div>
    </article>
  `;
}

function updateCategorySlides() {
  document.querySelectorAll(".category-showcase").forEach(card => {
    const category = card.dataset.openCategory;
    const itemCount = menuItems.filter(item => item.category === category).length;
    const currentIndex = itemCount ? (categorySlideIndexes[category] || 0) % itemCount : 0;
    card.querySelectorAll(".category-preview img").forEach((img, index) => {
      img.classList.toggle("active", index === currentIndex);
    });
    card.querySelectorAll(".slide-dots i").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  });
}

function priceText(item) {
  if (item.tacoMix && item.tacoChoices?.length) {
    const prices = item.tacoChoices.map(choice => choice.price);
    return `${money(Math.min(...prices))} - ${money(Math.max(...prices))}`;
  }
  if (item.variants?.length) {
    const prices = item.variants.map(variant => variant.price);
    return `${money(Math.min(...prices))} - ${money(Math.max(...prices))}`;
  }
  return money(item.price);
}

function simpleOptionSummary(item) {
  if (!item.variants?.length) return [];
  if (item.variants.length <= 12) {
    return item.variants.map(variant => `${variant.name} ${money(variant.price)}`);
  }

  const groups = item.variants.reduce((summary, variant) => {
    const groupName = variant.name.split(" ")[0] || "Option";
    if (!summary[groupName]) summary[groupName] = [];
    summary[groupName].push(Number(variant.price || 0));
    return summary;
  }, {});

  return Object.entries(groups).map(([name, prices]) => {
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return `${name} ${min === max ? money(min) : `${money(min)}-${money(max)}`}`;
  });
}

function renderSimpleMenu() {
  const grid = $("#simpleMenuGrid");
  if (!grid) return;
  const visibleItems = orderedMenuItems().filter(item => !item.outOfStock);
  const categories = orderedCategories().filter(category => visibleItems.some(item => item.category === category));

  grid.innerHTML = categories.map(category => {
    const items = visibleItems.filter(item => item.category === category);
    return `
      <section class="simple-menu-section">
        <h3>${escapeHtml(category)}</h3>
        ${items.map(item => `
          <article class="simple-menu-item">
            <div class="simple-menu-line">
              <span class="simple-menu-name">${escapeHtml(item.name)}</span>
              <strong class="simple-menu-price">${escapeHtml(priceText(item))}</strong>
            </div>
            <p class="simple-menu-desc">${escapeHtml(item.desc || "")}</p>
            ${simpleOptionSummary(item).length ? `<div class="simple-menu-options">${simpleOptionSummary(item).map(option => `<span class="simple-menu-option">${escapeHtml(option)}</span>`).join("")}</div>` : ""}
          </article>
        `).join("")}
      </section>
    `;
  }).join("");
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
          <div class="item-detail">${money(line.linePrice)} ${t("each")}</div>
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
  renderCheckoutStep();
}

function checkoutReviewText() {
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const name = $("#customerName").value.trim() || t("customer");
  const phone = $("#customerPhone").value.trim();
  return `${name}${phone ? ` - ${phone}` : ""} - ${orderTypeLabel($("#orderType").value)} - ${itemCount} ${itemCount === 1 ? t("item") : t("items")}`;
}

function renderCheckoutStep() {
  const steps = [...document.querySelectorAll("[data-checkout-step]")];
  if (!steps.length) return;
  checkoutStep = Math.max(0, Math.min(checkoutStep, steps.length - 1));
  steps.forEach(step => {
    step.classList.toggle("hidden", Number(step.dataset.checkoutStep) !== checkoutStep);
  });
  $("#checkoutProgress").textContent = `${t("step")} ${checkoutStep + 1} ${t("of")} ${steps.length}`;
  $("#checkoutBackBtn").classList.toggle("hidden", checkoutStep === 0);
  $("#checkoutNextBtn").classList.toggle("hidden", checkoutStep === steps.length - 1);
  $("#checkoutSubmitBtn").classList.toggle("hidden", checkoutStep !== steps.length - 1);
  if ($("#checkoutReviewText")) $("#checkoutReviewText").textContent = checkoutReviewText();
}

function nextCheckoutStep() {
  const steps = [...document.querySelectorAll("[data-checkout-step]")];
  if (!steps.length) return;
  if (checkoutStep === 0 && cart.length === 0) {
    alert(t("addBeforeNext"));
    return;
  }
  if (checkoutStep === 1 && !$("#customerName").value.trim()) {
    $("#customerName").focus();
    alert(t("enterName"));
    return;
  }
  checkoutStep = Math.min(checkoutStep + 1, steps.length - 1);
  renderCheckoutStep();
}

function previousCheckoutStep() {
  checkoutStep = Math.max(checkoutStep - 1, 0);
  renderCheckoutStep();
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

function addConfiguredItemToCart(item, selectedToppings, variant = null, qty = 1) {
  const variantName = variant?.name || "";
  const basePrice = variant?.price ?? item.price;
  const linePrice = basePrice + selectedToppingTotal(selectedToppings);
  const cartKey = cartKeyFor(item.id, selectedToppings, variantName);
  const quantity = Math.max(1, Number(qty) || 1);
  const existing = cart.find(line => line.cartKey === cartKey);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ ...item, cartKey, selectedToppings, variantName, linePrice, qty: quantity });
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
    customerPhone: $("#customerPhone").value.trim(),
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
      <div class="submitted-card-header">
        <div>
          <h3>#${order.id} - ${escapeHtml(order.customerName)}</h3>
          <p>${escapeHtml(orderTypeLabel(order.orderType))} - ${order.items.reduce((sum, item) => sum + item.qty, 0)} ${t("items")}</p>
          ${order.customerPhone ? `<p>${escapeHtml(order.customerPhone)}</p>` : ""}
          <p>${order.createdAt.toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
        </div>
        <strong>${money(order.totals.total)}</strong>
      </div>
      <div class="history-items">
        ${order.items.map(item => `
          <div class="history-line">
            <span>${item.qty}x ${escapeHtml(item.name)}</span>
            <strong>${money(item.linePrice * item.qty)}</strong>
            ${item.variantName ? `<small>${escapeHtml(item.variantName)}</small>` : ""}
            ${toppingSummary(item.selectedToppings || []) ? `<small>${escapeHtml(toppingSummary(item.selectedToppings))}</small>` : ""}
          </div>
        `).join("")}
      </div>
      ${order.notes ? `<p class="history-notes"><strong>Notes:</strong> ${escapeHtml(order.notes)}</p>` : ""}
    </article>
  `).join("");
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-language]").forEach(button => {
    button.classList.toggle("active", button.dataset.language === currentLanguage);
  });
  setText(".brand-lockup .eyebrow", t("selfOrdering"));
  setText("#orderViewBtn", t("orderPage"));
  setText("#simpleMenuViewBtn", t("simpleMenu"));
  setText("#historyViewBtn", t("orderHistory"));
  setText("#ownerViewBtn", t("ownerPage"));
  setText(".menu-area .section-heading .eyebrow", t("freshFlavor"));
  setText(".menu-area .section-heading h2", t("tapItems"));
  setText(".order-panel .panel-header .eyebrow", t("socalTicket"));
  setText(".order-panel .panel-header h2", t("currentOrder"));
  setText("#clearCartBtn", t("clear"));
  setText('[data-checkout-step="0"] h3', t("reviewOrder"));
  const nameLabel = document.querySelector('[data-checkout-step="1"] label');
  if (nameLabel) nameLabel.childNodes[0].textContent = `${t("customerName")} `;
  if ($("#customerName")) $("#customerName").placeholder = t("namePlaceholder");
  const phoneLabel = document.querySelector('[data-checkout-step="2"] label');
  if (phoneLabel) phoneLabel.childNodes[0].textContent = `${t("phoneNumber")} `;
  setText(".optional-note", t("optional"));
  if ($("#customerPhone")) $("#customerPhone").placeholder = t("phonePlaceholder");
  const orderTypeLabelElement = document.querySelector('[data-checkout-step="3"] label');
  if (orderTypeLabelElement) orderTypeLabelElement.childNodes[0].textContent = `${t("orderType")} `;
  setText('#orderType option[value="Dine in"]', t("dineIn"));
  setText('#orderType option[value="Takeout"]', t("takeout"));
  setText('#orderType option[value="Delivery"]', t("delivery"));
  const notesLabel = document.querySelector('[data-checkout-step="4"] label');
  if (notesLabel) notesLabel.childNodes[0].textContent = `${t("notes")} `;
  if ($("#orderNotes")) $("#orderNotes").placeholder = t("notesPlaceholder");
  setText('[data-checkout-step="5"] h3', t("readyToSend"));
  setText("#checkoutReviewText", t("reviewTotal"));
  setText(".totals div:nth-child(1) span", t("subtotal"));
  setText(".totals div:nth-child(2) span", t("tax"));
  setText(".totals .grand-total span", t("total"));
  setText("#checkoutBackBtn", t("back"));
  setText("#checkoutNextBtn", t("next"));
  setText("#checkoutSubmitBtn", t("placeOrder"));
  setText("#orderSummaryTitle", t("orderSummary"));
  setText("#closeOrderSummaryBtn", t("close"));
  setText("#doneOrderSummaryBtn", t("done"));
  setText("#toppingForm .primary-button", t("addToOrder"));
  setText("#cancelToppingsBtn", t("cancel"));
  renderMenu();
  renderSimpleMenu();
  renderCart();
  renderSubmittedOrders();
  renderCheckoutStep();
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  localStorage.setItem(languageStorageKey, currentLanguage);
  applyLanguage();
}

function orderTypeLabelEs(type) {
  return {
    "Dine in": "Comer aquí",
    "Takeout": "Para llevar",
    "Delivery": "Entrega"
  }[type] || type;
}

function orderEmailText(order, language = "en") {
  const isSpanish = language === "es";
  const labels = isSpanish
    ? {
      title: "Pedido de SoCal Tacos",
      order: "Pedido",
      customer: "Cliente",
      phone: "Teléfono",
      type: "Tipo",
      time: "Hora",
      items: "Artículos",
      notes: "Notas",
      subtotal: "Subtotal",
      tax: "Impuesto",
      total: "Total"
    }
    : {
      title: "SoCal Tacos Order",
      order: "Order",
      customer: "Customer",
      phone: "Phone",
      type: "Type",
      time: "Time",
      items: "Items",
      notes: "Notes",
      subtotal: "Subtotal",
      tax: "Tax",
      total: "Total"
    };
  const type = isSpanish ? orderTypeLabelEs(order.orderType) : order.orderType;
  const lines = [
    labels.title,
    `${labels.order} #${order.id}`,
    `${labels.customer}: ${order.customerName}`,
    order.customerPhone ? `${labels.phone}: ${order.customerPhone}` : "",
    `${labels.type}: ${type}`,
    `${labels.time}: ${order.createdAt.toLocaleString()}`,
    "",
    `${labels.items}:`,
    ...order.items.flatMap(item => [
      `${item.qty}x ${item.name} - ${money(item.linePrice * item.qty)}`,
      item.variantName ? `  ${item.variantName}` : "",
      toppingSummary(item.selectedToppings || []) ? `  ${toppingSummary(item.selectedToppings)}` : ""
    ].filter(Boolean)),
    "",
    order.notes ? `${labels.notes}: ${order.notes}` : "",
    `${labels.subtotal}: ${money(order.totals.subtotal)}`,
    `${labels.tax}: ${money(order.totals.tax)}`,
    `${labels.total}: ${money(order.totals.total)}`
  ];
  return lines.filter(line => line !== "").join("\n");
}

function bilingualOrderEmailText(order) {
  return [
    "ENGLISH",
    orderEmailText(order, "en"),
    "",
    "ESPAÑOL",
    orderEmailText(order, "es")
  ].join("\n");
}

async function sendOrderEmail(order, showAlert = false) {
  const payload = {
    _subject: `SoCal Tacos Order #${order.id}`,
    _template: "box",
    _captcha: "false",
    order_number: order.id,
    customer_name: order.customerName,
    customer_phone: order.customerPhone || "",
    order_type: order.orderType,
    total: money(order.totals.total),
    order_details: bilingualOrderEmailText(order),
    order_details_english: orderEmailText(order, "en"),
    order_details_spanish: orderEmailText(order, "es")
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${orderEmailAddress}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error("Email was not accepted.");
    if (showAlert) alert("Order email sent.");
    return true;
  } catch {
    if (showAlert) alert("The email did not send. Check the internet connection and try again.");
    return false;
  }
}

function orderSummaryMarkup(order) {
  return `
    <div class="summary-bear" aria-hidden="true">
      <div class="bear-ear bear-ear-left"></div>
      <div class="bear-ear bear-ear-right"></div>
      <div class="bear-head">
        <img src="socal-tacos-bear-logo.png" alt="">
      </div>
      <div class="bear-body"></div>
      <div class="bear-arm bear-arm-left"></div>
      <div class="bear-arm bear-arm-right"></div>
      <div class="bear-foot bear-foot-left"></div>
      <div class="bear-foot bear-foot-right"></div>
    </div>
    <div class="summary-hero">
      <p>${t("thankYou")}, ${escapeHtml(order.customerName)}</p>
      <strong>#${order.id}</strong>
      <span>${t("sent")}</span>
      <span class="payment-note">${t("payAfterFood")}</span>
      ${order.customerPhone ? `<span>${escapeHtml(order.customerPhone)}</span>` : ""}
    </div>
    <div class="summary-list">
      ${order.items.map(item => `
        <div class="summary-line">
          <span>${item.qty}x ${escapeHtml(item.name)}</span>
          <strong>${money(item.linePrice * item.qty)}</strong>
          ${item.variantName ? `<small>${escapeHtml(item.variantName)}</small>` : ""}
          ${toppingSummary(item.selectedToppings || []) ? `<small>${escapeHtml(toppingSummary(item.selectedToppings))}</small>` : ""}
        </div>
      `).join("")}
    </div>
    ${order.notes ? `<p class="history-notes"><strong>Notes:</strong> ${escapeHtml(order.notes)}</p>` : ""}
    <div class="summary-totals">
      <div><span>Subtotal</span><strong>${money(order.totals.subtotal)}</strong></div>
      <div><span>Tax</span><strong>${money(order.totals.tax)}</strong></div>
      <div class="grand-total"><span>Total</span><strong>${money(order.totals.total)}</strong></div>
    </div>
  `;
}

function showOrderSummary(order) {
  clearTimeout(orderSummaryTimer);
  $("#orderSummaryBody").innerHTML = orderSummaryMarkup(order);
  $("#orderSummaryModal").classList.remove("hidden");
  orderSummaryTimer = setTimeout(() => {
    closeOrderSummary();
  }, 10000);
}

function closeOrderSummary() {
  clearTimeout(orderSummaryTimer);
  $("#orderSummaryModal").classList.add("hidden");
  $("#orderSummaryBody").innerHTML = "";
}

function submitOrder(event) {
  event.preventDefault();
  if (cart.length === 0) {
    alert("Add at least one item before placing an order.");
    return;
  }

  const order = createOrder();
  submittedOrders.unshift(order);
  saveOrderHistory();
  cart = [];
  $("#checkoutForm").reset();
  checkoutStep = 0;
  renderCart();
  renderSubmittedOrders();
  showOrderSummary(order);
  sendOrderEmail(order);
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
      ${imageMarkup(imageForItem(item), "owner-thumb", "No photo")}
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
  $("#editImagePreview").innerHTML = imageForItem(item)
    ? `<img src="${escapeHtml(imageForItem(item))}" alt="Selected menu item preview">`
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
    image: image || fallbackImageForItem({ ...existingItem, name, category, desc }),
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
  menuItems.push({ id, name, category, price, desc, image: image || fallbackImageForItem({ name, category, desc }), toppingCategoryIds });
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
  $("#toppingModalTitle").textContent = `${t("chooseToppings")} ${item.name}`;
  const tacoMixMarkup = item.tacoMix ? `
    <section class="topping-group">
      <h3>${t("chooseMeats")}</h3>
      <div class="choice-list taco-mix-list">
        ${[1, 2, 3].map(number => `
          <label class="taco-mix-choice">
            Taco ${number}
            <select name="tacoMixChoice">
              ${(item.tacoChoices || []).map(choice => `
                <option value="${escapeHtml(choice.name)}" data-price="${choice.price}">
                  ${escapeHtml(choice.name)} - ${money(choice.price)}
                </option>
              `).join("")}
            </select>
          </label>
        `).join("")}
      </div>
      <p class="choice-help">${currentLanguage === "es" ? "El precio será el de la carne más cara." : currentLanguage === "zh" ? "价格按最高价肉类计算。" : "The plate price becomes the highest priced meat selected."}</p>
    </section>
  ` : "";
  const variantMarkup = item.variants?.length ? `
    <section class="topping-group">
      <h3>${t("selectOption")}</h3>
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

  const quantityMarkup = `
    <section class="topping-group quantity-group">
      <h3>${t("howMany")}</h3>
      <div class="modal-qty-controls">
        <button type="button" data-modal-qty="-1" aria-label="Less">-</button>
        <input id="modalItemQty" type="number" min="1" max="99" step="1" value="1" inputmode="numeric" aria-label="Item quantity">
        <button type="button" data-modal-qty="1" aria-label="More">+</button>
      </div>
    </section>
  `;

  $("#toppingModalBody").innerHTML = tacoMixMarkup + variantMarkup + quantityMarkup + itemToppingCategories(item).map(category => `
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
  const tacoMixVariant = item.tacoMix ? selectedTacoMixVariant(item) : null;
  if (item.tacoMix && !tacoMixVariant) {
    alert(currentLanguage === "es" ? "Elija las 3 carnes primero." : currentLanguage === "zh" ? "请先选择3种肉。" : "Choose all 3 taco meats first.");
    return;
  }

  const variantInput = document.querySelector(`#toppingModalBody input[name="itemVariant"]:checked`);
  const variant = tacoMixVariant || (variantInput ? { name: variantInput.value, price: Number(variantInput.dataset.price || item.price) } : null);
  const quantity = Math.max(1, Math.min(99, Number($("#modalItemQty")?.value || 1) || 1));
  addConfiguredItemToCart(item, selectedToppings, variant, quantity);
  closeToppingModal();
}

function selectedTacoMixVariant(item) {
  const selects = [...document.querySelectorAll(`#toppingModalBody select[name="tacoMixChoice"]`)];
  if (selects.length !== 3) return null;

  const choices = selects.map(select => {
    const selectedOption = select.selectedOptions[0];
    return {
      name: select.value,
      price: Number(selectedOption?.dataset.price || item.price || 0)
    };
  });

  if (choices.some(choice => !choice.name || Number.isNaN(choice.price))) return null;
  return {
    name: `Meats: ${choices.map(choice => choice.name).join(", ")}`,
    price: Math.max(...choices.map(choice => choice.price))
  };
}

function showPage(pageName) {
  const isOrderPage = pageName === "order";
  const isSimpleMenuPage = pageName === "simpleMenu";
  const isHistoryPage = pageName === "history";
  const isOwnerPage = pageName === "owner";
  toggleClass("#orderPage", "hidden", !isOrderPage);
  toggleClass("#simpleMenuPage", "hidden", !isSimpleMenuPage);
  toggleClass("#historyPage", "hidden", !isHistoryPage);
  toggleClass("#ownerPage", "hidden", !isOwnerPage);
  toggleClass("#orderViewBtn", "active", isOrderPage);
  toggleClass("#simpleMenuViewBtn", "active", isSimpleMenuPage);
  toggleClass("#historyViewBtn", "active", isHistoryPage);
  toggleClass("#ownerViewBtn", "active", isOwnerPage);
  if (isSimpleMenuPage) renderSimpleMenu();
  if (isHistoryPage) renderSubmittedOrders();
}

function returnToHomeAfterInactivity() {
  activeCustomerCategory = null;
  checkoutStep = 0;
  cart = [];
  $("#checkoutForm").reset();
  closeToppingModal();
  closeEditItem();
  closeOrderSummary();
  showPage("order");
  renderMenu();
  renderCart();
  renderCheckoutStep();
}

function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(returnToHomeAfterInactivity, 5 * 60 * 1000);
}

["click", "touchstart", "keydown", "input", "change", "pointerdown"].forEach(eventName => {
  document.addEventListener(eventName, resetInactivityTimer, { passive: true });
});

document.addEventListener("click", event => {
  const addId = event.target.dataset.add;
  const addCardId = event.target.closest("[data-add-card]")?.dataset.addCard;
  const increaseId = event.target.dataset.increase;
  const decreaseId = event.target.dataset.decrease;
  const removeItemId = event.target.dataset.removeItem;
  const editItemId = event.target.dataset.editItem;
  const moveItemId = event.target.dataset.moveItem;
  const moveCategory = event.target.dataset.moveCategory;
  const moveDirection = event.target.dataset.moveDirection;
  const modalQtyChange = event.target.dataset.modalQty;
  const removeToppingCategoryId = event.target.dataset.removeToppingCategory;
  const openCategory = event.target.closest("[data-open-category]")?.dataset.openCategory;
  const closeCategory = event.target.dataset.closeCategory;

  if (addId) addToCart(addId);
  else if (addCardId) addToCart(addCardId);
  if (openCategory) {
    activeCustomerCategory = openCategory;
    renderMenu();
  }
  if (closeCategory) {
    activeCustomerCategory = null;
    renderMenu();
  }
  if (increaseId) changeQty(increaseId, 1);
  if (decreaseId) changeQty(decreaseId, -1);
  if (moveItemId) moveOwnerItem(moveItemId, moveDirection);
  if (moveCategory) moveOwnerCategory(moveCategory, moveDirection);
  if (modalQtyChange) {
    const quantityInput = $("#modalItemQty");
    if (quantityInput) {
      const nextQuantity = Math.max(1, Math.min(99, Number(quantityInput.value || 1) + Number(modalQtyChange)));
      quantityInput.value = nextQuantity;
    }
  }
  if (editItemId) openEditItem(editItemId);
  if (removeItemId) removeOwnerItem(removeItemId);
  if (removeToppingCategoryId) removeToppingCategory(removeToppingCategoryId);
});

document.querySelectorAll("[data-language]").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

document.addEventListener("change", event => {
  const itemId = event.target.dataset.itemToppingItem;
  const categoryId = event.target.dataset.itemToppingCategory;
  if (itemId && categoryId) {
    toggleItemToppingCategory(itemId, categoryId, event.target.checked);
  }
});

on("#checkoutForm", "submit", submitOrder);
on("#ownerItemForm", "submit", addOwnerItem);
on("#editItemForm", "submit", saveEditedItem);
on("#toppingCategoryForm", "submit", addToppingCategory);
on("#toppingForm", "submit", submitToppings);
on("#cancelToppingsBtn", "click", closeToppingModal);
on("#cancelEditItemBtn", "click", closeEditItem);
on("#closeOrderSummaryBtn", "click", closeOrderSummary);
on("#doneOrderSummaryBtn", "click", closeOrderSummary);
on("#checkoutNextBtn", "click", nextCheckoutStep);
on("#checkoutBackBtn", "click", previousCheckoutStep);
on("#clearCartBtn", "click", () => {
  cart = [];
  checkoutStep = 0;
  renderCart();
});
on("#demoOrderBtn", "click", addDemoOrder);
on("#resetMenuBtn", "click", resetMenu);
on("#orderViewBtn", "click", () => showPage("order"));
on("#simpleMenuViewBtn", "click", () => showPage("simpleMenu"));
on("#historyViewBtn", "click", () => showPage("history"));
on("#ownerViewBtn", "click", () => showPage("owner"));
on("#ownerItemImageUrl", "input", updateOwnerImagePreview);
on("#ownerItemImageFile", "change", updateOwnerImagePreview);
on("#editItemImageUrl", "input", updateEditImagePreview);
on("#editItemImageFile", "change", updateEditImagePreview);
refreshMenuViews();
renderCart();
renderSubmittedOrders();
renderCheckoutStep();
applyLanguage();
resetInactivityTimer();

setInterval(() => {
  if ($("#orderPage").classList.contains("hidden") || activeCustomerCategory) return;
  orderedCategories().forEach(category => {
    const itemCount = menuItems.filter(item => item.category === category).length;
    if (itemCount > 1) {
      categorySlideIndexes[category] = ((categorySlideIndexes[category] || 0) + 1) % itemCount;
    }
  });
  updateCategorySlides();
}, 8000);

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}
