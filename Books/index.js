import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import md5 from "md5"

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
const API_KEY = "AIzaSyBRfVMUzVveYlQeKNb5KiFXur31SELSzCA";
const baseUrl = "https://www.googleapis.com/books/v1/volumes";

var reading = [];
var read = [];
var wantToRead = [];
var recommendation = [];
var categories = ["Fiction", "Mystery", "Thriller", "Science Fiction", "Fantasy", "Romance", "Historical Fiction"];
var selectedCategory = categories[Math.floor(Math.random() * 7)];
var selectedList = wantToRead;

app.get("/", async (req,res)=> {
    const category = req.query.category || selectedCategory;
    try {
        const result = await axios.get(baseUrl, {
            params: {
                key: API_KEY,
                q: `subject:${category}`,
                maxResults: 20
            }
        })

        res.render("index.ejs", {
        reading: reading[0],
        categories: categories,
        items:result.data.items,
        category: category
    });
    }
    catch(err) {
        console.log(err.response.data);
    }
    // res.render("index.ejs");
})

app.post("/", async(req, res)=> {
    const category = req.body.category;
    res.redirect(`/?category=${encodeURIComponent(category)}`);
})

app.get("/search", async (req, res)=> {
    const searchInput = req.query.searchValue;
    if(!searchInput) return res.redirect('/');
    try {
        const result = await axios.get(baseUrl, {
            params: {
                key: API_KEY,
                q: searchInput,
                maxResults: 20
            }
        })
        res.render("search.ejs", {
            values: result.data.items,
            searchInput: searchInput
            // redirectTo: req.originalUrl
        });
    }
    catch(err) {
        console.log(err.response.data)
    }
})

app.post("/search", async (req, res)=> {
    const searchInput = req.body.searchValue;
    res.redirect(`/search?searchValue=${encodeURIComponent(searchInput)}`);
})
async function listAdder(req, list, array, id) {
    if(req.body['search-result'] === list) {
        try {
            const result = await axios.get(baseUrl+"/"+id, {
                params: {
                    key: API_KEY
                }
            })
            array.push(result.data);
        }
        catch (err) {
            console.log(err.response.data);
        }
    }
}
app.post("/update-list", async (req,res)=> {
    const volumeId = req.body['selected-search-id'];
    await listAdder(req, "toRead", wantToRead, volumeId)
    await listAdder(req, "reading", reading, volumeId);
    await listAdder(req, "read", read, volumeId);
    const searchInput = req.body.searchValue;
    res.redirect(`/search?searchValue=${encodeURIComponent(searchInput)}`);
})
app.post("/single", async (req, res)=> {
    const id = req.body["single-id"];
    
    try {
        const result = await axios.get(baseUrl+"/"+id, {
            params: {
                key: API_KEY
            }
        })
        const similarCategory = result.data.volumeInfo.categories[0];
        const result1 = await axios.get(baseUrl, {
            params: {
                key: API_KEY,
                q: `subject:${similarCategory}`
            }
        })
        res.render("single-book.ejs", {book: result.data, similarBooks: result1.data.items});
    }
    catch (err) {
        console.log(err.response.data);
    }
})
app.get("/profile", async(req, res)=> {
    const hash = md5('yanetgele@gmail.com');
    const gravatarURL = `https://www.gravatar.com/avatar/${hash}?d=identicon&s=200`;
    const books = reading.length + read.length + wantToRead.length;
    var selectedListName = "Want to Read";

    if(req.query.list !== "wantToRead") {
        if(req.query.list === "reading") {
            selectedList = reading;
            selectedListName = "Reading";
        } else if(req.query.list === "read") {
            selectedList = read;
            selectedListName = "Read";
        }
    } else {
        selectedList = wantToRead;
        selectedListName = "Want to Read";
    }
    const data = {
        books: books,
        list: selectedList,
        profilePic: gravatarURL,
        listName: selectedListName
    }

    res.render("profile.ejs", {data});
})
app.post("/profile", async(req, res)=> {
    const list = req.body.profileList;
    if(req.body.profileList=== "wantToRead") {
        res.redirect(`profile?list=${encodeURIComponent(list)}`);
    } else {
        res.redirect(`profile?list=${encodeURIComponent(list)}`);
    }
})

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})