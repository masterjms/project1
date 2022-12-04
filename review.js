// local reviews data
const reviews = [
    {
      id: 1,
      name: "WEB DEVELOPER",
      job: "Jang Min-Sung",
      img:
        "https://itimg.chosun.com/sitedata/image/202203/03/2022030300868_0.jpg",
      text:
        "Welcome to my place. This is my first web site dev-proj. We ultimately persue concise code and synchronized to user. We avoid the simple visual effect but also not stylish. Our design and technology will lead the world.",
    },
    {
      id: 2,
      name: "Git Hub",
      job: "portpolio",
      img:
        "https://miro.medium.com/max/318/1*1OKmA2EdGln8O6RCVORgGg.png",
      text:
        "Introduce My Git page! We study HTML, C, JavaScript, Python. We hope to see you in here. > https://github.com/masterjms <",
    },
    {
      id: 3,
      name: "How to make this?",
      job: "develop process",
      img:
        "https://cdn.codingworldnews.com/news/photo/202103/img_2676_0.jpg",
      text:
        "In past, I want to make my own web site. Because people who develop something big, all of them have their own site. They talk about their code review, or feeling after completing the project. So I conclude to make it while studying. It was harder than I thought to renew things that had already been made. It takes larger hours than I expected. Now, I did it.",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});


  
