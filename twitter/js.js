var modal = document.getElementById("myModal") // obtém o modal
var btn = document.getElementById("myBtn") // obtém o botão que abre o modal
var span = document.getElementsByClassName("close")[0] // obtém o elemento <span> que fecha o modal

// quando o usuário clicar no botão, abre o modal
btn.onclick = function () {
    modal.style.display = "block"
}

// quando o usuário clicar no X, feche o modal
span.onclick = function () {
    modal.style.display = "none"
}

const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
];