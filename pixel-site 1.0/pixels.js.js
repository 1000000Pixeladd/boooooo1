const soldPixels = [
  // формат: [x, y, width, height, imageUrl, link, title, price]
  [0, 0, 100, 100, "https://example.com/image1.jpg", "https://google.com", "Google", 1000],
  [100, 0, 50, 50, "https://example.com/meme.png", "https://t.me/yourchannel", "Мой канал", 250],
  // сюда будешь добавлять новые строчки
];

const board = document.getElementById("pixel-board");

soldPixels.forEach(([x, y, w, h, img, link, title]) => {
  const div = document.createElement("div");
  div.className = "pixel-block";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = w + "px";
  div.style.height = h + "px";
  div.innerHTML = `<a href="${link}" target="_blank"><img src="${img}" alt="${title}"></a>`;
  div.setAttribute("data-title", title);
  board.appendChild(div);
});