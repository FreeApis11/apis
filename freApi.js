import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.routes.js"
import animalsRoutes from "./routes/Animals.routes.js"
import posts from "./routes/posts.routes.js"
import books  from "./routes/books.routes.js"
const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>FreeAPI Hub</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      line-height: 1.6;
    }
    h1, h2 {
      text-align: center;
    }
    p.center {
      text-align: center;
    }
    ul {
      max-width: 400px;
      margin: auto;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 20px 0;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f4f4f4;
    }
    code {
      background: #f9f9f9;
      padding: 2px 5px;
      border-radius: 4px;
    }
    button {
      margin-left: 5px;
      padding: 4px 8px;
      cursor: pointer;
      border: none;
      background: #007bff;
      color: white;
      border-radius: 4px;
      font-size: 12px;
    }
    button:hover {
      background: #0056b3;
    }
    .copied {
      background: green !important;
    }
  </style>
</head>

<body>

<h1>🚀 FreeAPI Hub</h1>
<p class="center">Build anything. Pay nothing.</p>

<hr>

<h2>👤 Users APIs</h2>
<table>
<tr>
  <th>API</th><th>Method</th><th>Endpoint</th><th>Example</th><th>Copy</th>
</tr>

<tr>
  <td>Get All Users</td>
  <td>GET</td>
  <td><code>/users/</code></td>
  <td><code id="u1">https://apis-z5tu.onrender.com/users/</code></td>
  <td><button onclick="copy('u1', this)">Copy</button></td>
</tr>

<tr>
  <td>Get User by ID</td>
  <td>GET</td>
  <td><code>/users/id/:id</code></td>
  <td><code id="u2">https://apis-z5tu.onrender.com/users/id/1</code></td>
  <td><button onclick="copy('u2', this)">Copy</button></td>
</tr>

<tr>
  <td>Get by Salary</td>
  <td>GET</td>
  <td><code>/users/salary/:salary</code></td>
  <td><code id="u3">https://apis-z5tu.onrender.com/users/salary/1000</code></td>
  <td><button onclick="copy('u3', this)">Copy</button></td>
</tr>

</table>

<hr>

<h2>🐾 Animals APIs</h2>
<table>
<tr>
  <th>API</th><th>Method</th><th>Endpoint</th><th>Example</th><th>Copy</th>
</tr>

<tr>
  <td>Get All Animals</td>
  <td>GET</td>
  <td><code>/animals/</code></td>
  <td><code id="a1">https://apis-z5tu.onrender.com/animals/</code></td>
  <td><button onclick="copy('a1', this)">Copy</button></td>
</tr>

<tr>
  <td>Get by Name</td>
  <td>GET</td>
  <td><code>/animals/name/:name</code></td>
  <td><code id="a2">https://apis-z5tu.onrender.com/animals/name/lion</code></td>
  <td><button onclick="copy('a2', this)">Copy</button></td>
</tr>

<tr>
  <td>Get by Category</td>
  <td>GET</td>
  <td><code>/animals/cat/:cat</code></td>
  <td><code id="a3">https://apis-z5tu.onrender.com/animals/cat/mammal</code></td>
  <td><button onclick="copy('a3', this)">Copy</button></td>
</tr>

</table>

<hr>

<h2>📝 Posts APIs</h2>
<table>
<tr>
  <th>API</th><th>Method</th><th>Endpoint</th><th>Example</th><th>Copy</th>
</tr>

<tr>
  <td>Get All Posts</td>
  <td>GET</td>
  <td><code>/posts/</code></td>
  <td><code id="p1">https://apis-z5tu.onrender.com/posts/</code></td>
  <td><button onclick="copy('p1', this)">Copy</button></td>
</tr>

<tr>
  <td>Get Post by Title</td>
  <td>GET</td>
  <td><code>/posts/:title</code></td>
  <td><code id="p2">https://apis-z5tu.onrender.com/posts/how-to-code</code></td>
  <td><button onclick="copy('p2', this)">Copy</button></td>
</tr>

<tr>
  <td>Get Comments</td>
  <td>GET</td>
  <td><code>/posts/v/:id</code></td>
  <td><code id="p3">https://apis-z5tu.onrender.com/posts/v/123</code></td>
  <td><button onclick="copy('p3', this)">Copy</button></td>
</tr>

</table>

<hr>

<h2>🎥 Movies APIs</h2>
<table>
<tr>
  <th>API</th><th>Method</th><th>Endpoint</th><th>Example</th><th>Copy</th>
</tr>

<tr>
  <td>Get All Movies</td>
  <td>GET</td>
  <td><code>/movies/</code></td>
  <td><code id="m1">https://apis-z5tu.onrender.com/movies/</code></td>
  <td><button onclick="copy('m1', this)">Copy</button></td>
</tr>

<tr>
  <td>Get Movie by ID</td>
  <td>GET</td>
  <td><code>/movies/:id</code></td>
  <td><code id="m2">https://apis-z5tu.onrender.com/movies/123</code></td>
  <td><button onclick="copy('m2', this)">Copy</button></td>
</tr>

<tr>
  <td>Get by Title</td>
  <td>GET</td>
  <td><code>/movies/title/:title</code></td>
  <td><code id="m3">https://apis-z5tu.onrender.com/movies/title/inception</code></td>
  <td><button onclick="copy('m3', this)">Copy</button></td>
</tr>

</table>

<script>
function copy(id, btn) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);

  btn.innerText = "Copied!";
  btn.classList.add("copied");

  setTimeout(() => {
    btn.innerText = "Copy";
    btn.classList.remove("copied");
  }, 1500);
}
</script>

</body>
</html>
 
        
        `)
})
 
app.use("/users", userRoutes)
app.use("/animals",animalsRoutes)
app.use("/posts",posts)
app.use("/books",books)
app.listen(3000, () =>
    console.log("Server Connected at Port 3000")
)
 