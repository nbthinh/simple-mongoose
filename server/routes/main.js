const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
// Routes list
router.get("", async (req, res) => {
    
    try {
        const locals = {
            title: "Nodejs blog",
            description: "Demo"
        }

        let perPage = 5;
        let page = req.query.page || 1;
        const data = await Post.aggregate([{
            $sort: {
                createdAt: -1
            }
        }]).skip(perPage * page - perPage).limit(perPage).exec();

        const count = await Post.count;
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count/perPage);

        res.render("index.ejs", {
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
        });
    }
    catch(error) {
        console.log("error = ", error);
    }
});


// router.get("", async (req, res) => {
//     const locals = {
//         title: "Nodejs blog",
//         description: "Demo"
//     }
//     try {
//         let data = await Post.find();
//         console.log("data = ", data);
//         res.render("index.ejs", {locals, data});
//     }
//     catch(error) {
//         console.log("error = ", error);
//     }
// });




router.get("/about", (req, res) => {
    res.render("about.ejs");
});

// function insertPostData () {
//     Post.insertMany([
//         {
//             title: "Căm thù thằng hồ ngọc hiếu",
//             body: "Thằng hồ ngọc hiếu ngày nào đi học nó cũng xin tiền mình, thế mà đụng chuyện thì lối Bố Mẹ mình ra bêu rếu"
//         },
//         {
//             title: "Căm thù thằng nguyễn viên anh duy",
//             body: "Mình đâu thèm lấy ghế chỗ ngồi thằng nguyễn viên anh duy, vậy mà nó đổ thừa mình rồi chửi mình 'thằng chó mập sao mày lấy ghế tao mày ngồi mạy', nó ra lệnh cho mình mở quạt cho nó, mình không mở, nó cũng chửi: 'không mở thì thôi, chết mẹ nó đi', cơ thể mình mập hay sao đó đâu ăn hết của nó, nó cũng chửi mình là 'phì lũ', mình cầm sách hay tập học hay sao đó nó cũng chửi mình: 'mọt sách'"
//         }
//     ])
// }
// insertPostData();

module.exports = router;