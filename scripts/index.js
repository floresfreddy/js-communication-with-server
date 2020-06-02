const genericFetch = function(url, options={}) {
  return fetch(url, options)
    .then(function(res) {
      return res.json();
    })
    .catch(function(error) {
      console.error(error);
    });
};

const url = 'http://localhost:3000/posts';

const createPost = function(gifUrl, comment) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const p = document.createElement('p');

  img.src = gifUrl;
  p.textContent = comment;
  div.append(img, p);

  const posts = document.querySelector('.posts');
  posts.append(div);
};

// fetch and display one post
genericFetch(`${url}/1`)
  .then(function(post) {
    createPost(post.url, post.comment);
  });

// fetch and display all posts, so we'll see first cat twice
genericFetch(url)
.then(function(posts) {
  for (const post of posts) {
    createPost(post.url, post.comment);
  }
});