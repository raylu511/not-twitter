
const blogs = document.getElementsByClassName("blog");
for (let blog of blogs) {
  fetch(`https://not-twitter-marcy-lab.herokuapp.com/blogs/${blog.id}/comments`)
    .then((res) => res.json())
    .then((data) => {
      const commentsDiv = document.getElementById(`comments${blog.id}`);
      for (let comment of data) {
        addCommentToDom(commentsDiv, comment.username, comment.comment_text);
      }
    });
}

function addCommentToDom(commentsDiv, username, comment_text) {
  const p = document.createElement("p");
  p.innerText = `${username}:            ${comment_text}`;
  commentsDiv.appendChild(p);
}

const textAreaBtns = document.getElementsByClassName("textAreaBtn");
for (let button of textAreaBtns) {
  button.addEventListener("click", () => {
    const buttonID = button.id.split("_")[1];
    const textArea = document.getElementById(`textArea${buttonID}`);
    const commentsDiv = document.getElementById(`comments${buttonID}`);
    const username = document.getElementById("user_name").innerText;
    const userId = document.getElementById("user_id").innerText;
    if (textArea.value !== "") {
      fetch(`https://not-twitter-marcy-lab.herokuapp.com/blogs/${buttonID}/comments`, {
        method: "POST",
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ 
          userId: userId, 
          text: textArea.value }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          addCommentToDom(commentsDiv, username, textArea.value);
          textArea.value = "";
        });
    }
  });
}


//get the text inside the submit form 
//add new post to home page 
//grab text and put it inside data base using post fetch

const textAreaForNewBlog = document.getElementById("textAreaForNewBlog")
const postButton = document.getElementById("postButton")
const userId = document.getElementById("user_id").innerText;
postButton.addEventListener("click", () =>{
  if(textAreaForNewBlog.value !== ''){
    fetch(`https://not-twitter-marcy-lab.herokuapp.com/blogs`, {
      method: "POST",
      mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ 
          userId: userId, 
          body: textAreaForNewBlog.value })
        })
        .then (res => res.json())
        .then (data => {
          location.assign('/')})
  }
})




//remove all blogs that dont have the id style="display:none"

//when we cllick onna blog we want to show only that blog an all of its comments

//When the button is clicked, the text in the text area will be appended to the comments form. Make a POST Fetch to the database.

// post to the database
////blog/:id/comments
