let likeCount = 0;
let comments = [];

document.getElementById("likeBtn").addEventListener("click", () => {
  likeCount++;

document.getElementById("likeCount").innerText = likeCount;
});

document.getElementById("commentBtn").addEventListener("click", () => {

let comment = prompt("Enter your comment:");
     if (comment) {
     comments.push(comment);
     displayComments();
  }
});

document.getElementById("shareBtn").addEventListener("click", () => {

  localStorage.setItem("comments", JSON.stringify(comments));

  alert("Shared succsessfully!");
});

function displayComments() {

  const commentsList = document.getElementById("commentsList");
  commentsList.innerHTML = "";
  comments.forEach((comment) => {

    const li = document.createElement("li");
    li.innerText = comment;
    
    commentsList.append(li);
  });
}
