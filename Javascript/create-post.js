document.getElementById("create-post-button").addEventListener("click", function() {
  window.location.href = "create-post.html";
});

document.getElementById("create-post-form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting normally
  
  // get the values from the form
  var title = document.getElementById("title").value;
  var image = document.getElementById("image").value;
  var content = document.getElementById("content").value;
  
  // create a new post object
  var post-preview = {
    title: title,
    image: image,
    content: content
  };

  // add the post to the main page
  addPostToMainPage(post-preview);
  
  // redirect the user back to the main page
  window.location.href = "index.html";
});


function addPostToMainPage(post) {
  // create a new post element
  var postElement = document.createElement("div");
  postElement.className = "post-preview";
  
  // create the title element
  var titleElement = document.createElement("h2");
  titleElement.innerHTML = post.title;
  postElement.appendChild(titleElement);
  
  // create the image element
  var imageElement = document.createElement("img");
  imageElement.src = post.image;
  postElement.appendChild(imageElement);

  // create the content element
  var contentElement = document.createElement("p");
  contentElement.innerHTML = post.content;
  postElement.appendChild(contentElement);
  
  // add the post element to the main page
  var mainPage = document.getElementById("col-md-10 col-lg-8 col-xl-7");
  mainPage.appendChild(postElement);
}

function createNewSection() {
  const postContainer = document.querySelector('#post-container');

  // create new section element
  const newSection = document.createElement('div');
  newSection.classList.add('post-preview');

  // add HTML to section element
  newSection.innerHTML = `
    <a href="post.html">
      <h2 class="post-title">New Post Title</h2>
      <h3 class="post-subtitle">New Post Subtitle</h3>
    </a>
    <p class="post-meta">
      Posted by
      <a href="#!">New Author</a>
      on ${new Date().toLocaleDateString()}
    </p>
  `;

  // append new section to post container
  postContainer.appendChild(newSection);
}

