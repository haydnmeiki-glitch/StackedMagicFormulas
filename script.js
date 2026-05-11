console.log("Script connected!");
const rankFilter = document.getElementById("rankFilter");
const dateFilter = document.getElementById("dateFilter");
const typeFilter = document.getElementById("typeFilter");

const posts = document.querySelectorAll(".post");

function filterPosts() {

  const selectedRank = rankFilter.value;
  const selectedDate = dateFilter.value;
  const selectedType = typeFilter.value;

  posts.forEach(post => {

    const rank = post.dataset.rank;
    const date = post.dataset.date;
    const type = post.dataset.type;

    const rankMatch =
      !selectedRank || rank === selectedRank;

    const dateMatch =
      !selectedDate || date === selectedDate;

    const typeMatch =
      !selectedType || type === selectedType;

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
