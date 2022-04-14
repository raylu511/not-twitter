const blogs = document.getElementsByClassName("blog");
for (let blog of blogs) {
  fetch(`http://localhost:3000/blogs/${blog.id}/comments`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const commentsDiv = document.getElementById(`comments${blog.id}`);
      for (let comment of data) {
        addCommentToDom(commentsDiv, comment.username, comment.comment_text)
      }
    });
}

function addCommentToDom(commentsDiv, username, comment_text){
  const p = document.createElement("p");
        p.innerText = `${username}:            ${comment_text}`;
        commentsDiv.appendChild(p);
}

const textAreaBtns = document.getElementsByClassName('textAreaBtn')
for(let button of textAreaBtns){
  button.addEventListener('click', () =>{
    const buttonID = button.id.split('_')[1];
    const textArea = document.getElementById(`textArea${buttonID}`)
    const commentsDiv = document.getElementById(`comments${buttonID}`)
    const username = document.getElementById('user_name').innerText
    if(textArea.value !== '') {
      addCommentToDom(commentsDiv, username, textArea.value)
    }
    console.log(textArea.value)
  })
}
//remove all blogs that dont have the id

//when we cllick onna blog we want to show only that blog an all of its comments

//When the button is clicked, the text in the text area will be appended to the comments form. Make a POST Fetch to the database.

