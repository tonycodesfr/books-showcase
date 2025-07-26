const first = document.querySelector(".book1");
const second = document.querySelector(".book2");
const third = document.querySelector(".book3");
const fourth = document.querySelector(".book4");
const fifth = document.querySelector(".book5");
const sixth = document.querySelector(".book6");

const books = [
  {
    title: "Behave: The Biology of Humans at Our Best and Worst",
    genre: "Neuroscience & Behavior",
    publisher: "Penguin Press",
    description:
      "An expansive exploration of biological underpinnings of human behavior, from immediate neural triggers to evolutionary history.",
    author: "Robert Sapolsky",
    price: 18.0,
  },
  {
    title:
      "The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are",
    genre: "Developmental Neuroscience",
    publisher: "Guilford Press",
    description:
      "How social relationships help shape brain structure and emotional regulation across the lifespan.",
    author: "Daniel J. Siegel",
    price: 24.0,
  },
  {
    title: "Nature via Nurture: Genes, Experience, and What Makes Us Human",
    genre: "Genetics & Development",
    publisher: "HarperCollins",
    description:
      "Examines how genes and environment interact to influence human traits and development.",
    author: "Matt Ridley",
    price: 15.99,
  },
  {
    title: "The Gene: An Intimate History",
    genre: "Genetics & Medicine",
    publisher: "Scribner",
    description:
      "A sweeping history of genetic science and its role in shaping human development and identity.",
    author: "Siddhartha Mukherjee",
    price: 20.0,
  },
  {
    title: "Thinking, Fast and Slow",
    genre: "Cognitive Psychology",
    publisher: "Farrar, Straus and Giroux",
    description:
      "Explores the dual‑system architecture of the mind and its implications for judgment, decision‑making, and personal growth.",
    author: "Daniel Kahneman",
    price: 16.5,
  },
  {
    title: "Life 3.0: Being Human in the Age of Artificial Intelligence",
    genre: "AI Development & Future Studies",
    publisher: "Knopf (US) / Allen Lane (UK)",
    description:
      "Discusses AI’s history, its current capabilities, and the future impact on human society and life.",
    author: "Max Tegmark",
    price: 19.0,
  },
];

// loops through each object in the array
books.map((value) => {
  //   find out how to get the individual values
});

function display(num) {
  Object.entries(books[num]).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

first.addEventListener("click", () => {
  display(0);
});
second.addEventListener("click", () => {
  display(1);
});
third.addEventListener("click", () => {
  display(2);
});
fourth.addEventListener("click", () => {
  display(3);
});
fifth.addEventListener("click", () => {
  display(4);
});
sixth.addEventListener("click", () => {
  display(5);
});
