const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");

const postsConatiner = document.querySelector("#posts-container");

const postPage = document.querySelector("#post")
const postContainer = document.querySelector("#post-container")
const commentContainer = document.querySelector("#comment-container")

const emailArea = document.querySelector("#email")
const commentArea = document.querySelector("#comment")
const submitComment = document.querySelector("#submit-comment")

const urlSearch = new URLSearchParams(window.location.search);

const postId = urlSearch.get('id');

async function getAllPosts() {
    const resposnse = await fetch(url);

    const data = await resposnse.json();

    loadingElement.classList.add("hide");

    data.map((post) => {

        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        title.textContent = post.title;
        body.textContent = post.body;
        link.textContent = "Ler";
        link.setAttribute("href", `/projeto3/post.html?id=${post.id}`)

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postsConatiner.appendChild(div);

    })
}

async function getPost(id) {
    const [resposnsePost, resposnseComment] = await Promise.all ([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ]);

    const dataPost = await resposnsePost.json();

    const dataComment = await resposnseComment.json();

    loadingElement.classList.add("hide");

    postPage.classList.remove("hide");

    const title = document.createElement("h1");

    const body = document.createElement("p");

    title.innerText = dataPost.title;
    body.innerText = dataPost.body;

    postContainer.appendChild(title);
    postContainer.appendChild(body);

    dataComment.map((comment) => {
        createComment(comment)
    })

    submitComment.addEventListener("click", function(e) {

        e.preventDefault()
        
        let userEmail = emailArea.value;
        let userComment = commentArea.value;

        newComment(userEmail, userComment)
    })
}

function createComment(comment) {
    const div = document.createElement("div");
    const name = document.createElement("h3");
    const commentBody = document.createElement("p");

    name.innerText = comment.email;
    commentBody
    .innerText = comment.body;
    
    div.appendChild(name);
    div.appendChild(commentBody);

    commentContainer.appendChild(div)
}

async function newComment(userEmail, userComment) {
    let comment = {
        email: userEmail,
        body: userComment
    }
    const resposnse = await fetch(`${url}/${postId}/comments`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(comment)     
    })

    let data = await resposnse.json()

    createComment(data)
}

if (!postId) {
    getAllPosts()
}
else {
    getPost(postId)
}