import express from "express";
import bodyParser from "body-parser";
const port = 3000;

const app = express();
app.use(express.static("Public"));

app.use(bodyParser.urlencoded({extended: true}));

var postInput = [];
var titleOnView = "";
var contentOnView = "";
const postAdder = (req, res, next)=> {
    if(req.body.title && req.body.title.trim() !== "") {
        const value = {
        title: req.body.title,
        content: req.body.content
        }
        postInput.unshift(value);
        next();
    }
    else {
        next();
    }
}

//  Rendering the pages
app.get("/", (req, res)=> {
    res.render("index.ejs", {postInput: postInput});
})
app.get("/about", (req,res)=> {
    res.render("about.ejs");
})
app.get("/contact", (req,res)=> {
    res.render("contact.ejs");
})
app.get("/post-view", (req,res)=> {
    res.render("post-view.ejs")
    // temporary for now
})

//post submission
app.post("/submit",postAdder,(req,res)=> {
    // console.log(req.body);
    res.redirect("/")
})
app.post("/post-view", (req, res)=> {
    // console.log(req.body);
    titleOnView = req.body["selected-post-title"];
    contentOnView = req.body["selected-post-content"];
    res.render("post-view.ejs", {title: req.body["selected-post-title"], content: req.body["selected-post-content"]});
})
app.post("/edit-post", (req, res)=> {
    if(req.body["edited-title"] === titleOnView && req.body["edited-content"] === contentOnView) {
        res.redirect("/post-view.ejs");
    }
    else {
        const editedPostIndex = postInput.findIndex((post)=> {
            return post.title === titleOnView;  
            //forgot to return here and took me a while to find it
        })
        if(editedPostValue !== -1) {
            var editedPostValue = {
            title: req.body["edited-title"],
            content: req.body["edited-content"]
            }
        }
        postInput.splice(editedPostIndex, 1);
        postInput.unshift(editedPostValue);
        // console.log(postInput);
        res.render("post-view.ejs", {title: editedPostValue.title, content: editedPostValue.content})
    }
    // console.log(req.body["edited-title"], req.body["edited-content"])
})

app.post("/delete", (req, res)=> {
    const deletedPostIndex = postInput.findIndex(post=> post.title === req.body["deleted-post"]);
    postInput.splice(deletedPostIndex, 1);
    res.redirect("/");
})
app.post("/search", (req, res)=> {
    const searchedPostIndex = postInput.findIndex((post)=>{ 
        return req.body["searched-title"].toLowerCase() === post.title.toLowerCase();
        // Don't forget to add the case sensitivity feature later on
    });
    if(searchedPostIndex !== -1) {
        const searchedPostValue = [postInput[searchedPostIndex]];
        res.render("index.ejs", {postInput: searchedPostValue});
    }
    else {
        const searchedPostValue = [];
        res.render("index.ejs", {postInput: searchedPostValue})
    }
})

app.listen(port, ()=> {
    console.log("Server is running on port", port)
})