const blogs = document.getElementsByClassName("blog");
for (let blog of blogs) {
  blog.addEventListener("click", (e) => {
    console.log("hello world");
  });
}
