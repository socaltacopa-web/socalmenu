const ORDER_EMAIL = "so.cal.taco.pa@gmail.com";
const SHEET_NAME = "Orders";
const MENU_PROPERTY = "SOCAL_TACOS_SHARED_MENU";

function doGet(event) {
  const action = event && event.parameter && event.parameter.action;
  if (action === "menu") {
    return jsonResponse({ menu: getSharedMenu() });
  }

  const sheet = getOrdersSheet();
  const rows = sheet.getDataRange().getValues();
  const orders = rows.slice(1).map(row => {
    try {
      return JSON.parse(row[3]);
    } catch (error) {
      return null;
    }
  }).filter(Boolean);

  return jsonResponse({ orders });
}

function doPost(event) {
  const body = JSON.parse(event.postData.contents || "{}");
  if (body.menu) {
    saveSharedMenu(body.menu);
    return jsonResponse({ ok: true, menu: body.menu });
  }

  const order = body.order;
  if (!order || !order.id) return jsonResponse({ ok: false, error: "Missing order" });

  const sheet = getOrdersSheet();
  const rows = sheet.getDataRange().getValues();
  const exists = rows.some((row, index) => index > 0 && String(row[0]) === String(order.id));

  if (!exists) {
    sheet.appendRow([
      order.id,
      order.createdAt,
      order.customerName || "",
      JSON.stringify(order),
      Number(order.totals && order.totals.total ? order.totals.total : 0)
    ]);
    MailApp.sendEmail({
      to: ORDER_EMAIL,
      subject: `SoCal Tacos Order #${order.id}`,
      body: emailBody(order)
    });
  }

  return jsonResponse({ ok: true, order });
}

function getSharedMenu() {
  const saved = PropertiesService.getScriptProperties().getProperty(MENU_PROPERTY);
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch (error) {
    return null;
  }
}

function saveSharedMenu(menu) {
  const nextMenu = {
    items: Array.isArray(menu.items) ? menu.items : [],
    toppingCategories: Array.isArray(menu.toppingCategories) ? menu.toppingCategories : [],
    categoryOrder: Array.isArray(menu.categoryOrder) ? menu.categoryOrder : [],
    updatedAt: Number(menu.updatedAt || Date.now())
  };
  PropertiesService.getScriptProperties().setProperty(MENU_PROPERTY, JSON.stringify(nextMenu));
}

function getOrdersSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Order ID", "Created At", "Customer", "Order JSON", "Total"]);
  }
  return sheet;
}

function emailBody(order) {
  const items = (order.items || []).map(item => {
    const toppings = (item.selectedToppings || [])
      .flatMap(group => group.options || [])
      .map(option => option.name || option)
      .join(", ");
    return [
      `${item.qty}x ${item.name} - $${Number(item.linePrice * item.qty).toFixed(2)}`,
      item.variantName ? `  ${item.variantName}` : "",
      toppings ? `  ${toppings}` : ""
    ].filter(Boolean).join("\n");
  }).join("\n");

  return [
    `SoCal Tacos Order #${order.id}`,
    `Customer: ${order.customerName || ""}`,
    order.customerPhone ? `Phone: ${order.customerPhone}` : "",
    `Type: ${order.orderType || ""}`,
    `Time: ${order.createdAt || ""}`,
    "",
    "Items:",
    items,
    "",
    order.notes ? `Notes: ${order.notes}` : "",
    `Subtotal: $${Number(order.totals && order.totals.subtotal ? order.totals.subtotal : 0).toFixed(2)}`,
    `Tax: $${Number(order.totals && order.totals.tax ? order.totals.tax : 0).toFixed(2)}`,
    `Total: $${Number(order.totals && order.totals.total ? order.totals.total : 0).toFixed(2)}`
  ].filter(line => line !== "").join("\n");
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
