const blogs = document.getElementsByClassName("blog");
for (let blog of blogs) {
    fetch(`http://localhost:3000/blogs/${blog.id}/comments`)
      .then(res => res.json())
      .then(data => {console.log(data)
        const commentsDiv = document.getElementById(`comments${blog.id}`)
        console.log(commentsDiv)
        for(let comment of data){
          console.log(comment.username)
           const p = document.createElement('p')
           p.innerText = comment.username + ' ' + comment.comment_text
           commentsDiv.appendChild(p)
        }
      })
}
//remove all blogs that dont have the id 


//when we cllick onna blog we want to show only that blog an all of its comments