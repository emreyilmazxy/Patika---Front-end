fetch("https://jsonplaceholder.typicode.com/posts")
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        console.log(data.length);
    })
    .catch(err => console.log("Hata oluştu:", err));

//  async await ile
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
        console.log(data.length);
    }
    catch (error) {
        console.error("Hata oluştu:", error);
    }
}
getPosts();



fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
    })
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error("Hata oluştu:", err));

// async await ile 
async function createPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1
            })
        });
        const data = await response.json();
        console.log(data);
    }
    catch (err) {
        console.error("Hata oluştu:", err);
    }
}
