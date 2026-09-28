function readMore() {
    alert("Thanks for reading my blog!");
}

function addBlog() {
    let title = document.getElementById("blogTitle").value;
    let content = document.getElementById("blogContent").value;

    if (title === "" || content === "") {
        alert("Please fill all fields.");
        return;
    }

    let blogContainer = document.getElementById("blogContainer");

    let newBlog = document.createElement("div");
    newBlog.className = "blog-card";

    newBlog.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button onclick="readMore()">Read More</button>
    `;

    blogContainer.appendChild(newBlog);

    document.getElementById("blogTitle").value = "";
    document.getElementById("blogContent").value = "";

    alert("Blog added successfully!");
}

// Search blogs
document.getElementById("search").addEventListener("keyup", function () {

    let searchText = this.value.toLowerCase();
    let blogs = document.querySelectorAll(".blog-card");

    blogs.forEach(function(blog) {

        let text = blog.innerText.toLowerCase();

        if (text.includes(searchText)) {
            blog.style.display = "block";
        } else {
            blog.style.display = "none";
        }

    });
});