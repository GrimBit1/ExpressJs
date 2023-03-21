const express = require("express");

const path = require("path");

const exphbs = require('express-handlebars');

const blogs = require("../data/blogs.js");

const router = express.Router();


// console.log(blogs);


router.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "../views/index.html"));
    res.render('home')
});


router.get("/blog", (req, res) => {
    // res.sendFile(path.join(__dirname, "../views/bloghome.html"));
    res.render('blogHome',{
        blogs : blogs
    })
});

router.get("/blogpost/:slug", (req, res) => {
    let myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    // console.log(myBlog)
    // res.sendFile(path.join(__dirname, "../views/blogpage.html"));
    res.render('blogPage',{
        myBlog : myBlog[0]
    })

});

router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/about.html"));

});


module.exports = router;

