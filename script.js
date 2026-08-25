const rankFilter = document.getElementById("rankFilter");
const dateFilter = document.getElementById("dateFilter");
const typeFilter = document.getElementById("typeFilter");

const posts = document.querySelectorAll(".post");

// Hide everything on startup
posts.forEach(post => {
  post.style.display = "none";
});

function filterPosts() {

  const selectedRank = rankFilter.value;
  const selectedDate = dateFilter.value;
  const selectedType = typeFilter.value;

  posts.forEach(post => {

    const rank = post.dataset.rank;
    const date = post.dataset.date;
    const type = post.dataset.type;

    const rankMatch =
      selectedRank && rank === selectedRank;

    const dateMatch =
      selectedDate && date === selectedDate;

    const typeMatch =
      selectedType && type === selectedType;

    if (rankMatch && dateMatch && typeMatch) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }

  });

}

rankFilter.addEventListener("change", filterPosts);
dateFilter.addEventListener("change", filterPosts);
typeFilter.addEventListener("change", filterPosts);
typeFilter.addEventListener("change", filterPosts);
const openLore =
  document.getElementById("openLore");

const loreWindow =
  document.getElementById("loreWindow");

const closeLore =
  document.getElementById("closeLore");

openLore.onclick = () => {
  loreWindow.style.display = "flex";
};

closeLore.onclick = () => {
  loreWindow.style.display = "none";
};
const loreLinks =
  document.querySelectorAll(".loreLink");

loreLinks.forEach(link => {

  link.addEventListener("click", () => {

    rankFilter.value =
      link.dataset.rank;

    dateFilter.value =
      link.dataset.date;

    typeFilter.value =
      link.dataset.type;

    filterPosts();

    loreWindow.style.display = "none";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});
const sparkleCursor =
  document.getElementById("sparkleCursor");

document.querySelectorAll(".loreLink")
.forEach(link => {

  link.addEventListener("mouseenter", () => {
    sparkleCursor.style.display = "block";
  });

  link.addEventListener("mouseleave", () => {
    sparkleCursor.style.display = "none";
  });

  link.addEventListener("mousemove", (e) => {

    sparkleCursor.style.left =
      e.clientX + "px";

    sparkleCursor.style.top =
      e.clientY + "px";

  });

});
