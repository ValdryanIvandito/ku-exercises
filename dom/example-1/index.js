const item = document.createElement("li");
const textNode = document.createTextNode("Item-1");
item.append(textNode);

const list = document.createElement("ul");
list.append(item);

document.body.append(list);
