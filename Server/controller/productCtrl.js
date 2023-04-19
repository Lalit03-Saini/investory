const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongodbd");

//-----------Creating a Proverty-----------------//
const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json({
            newProduct,
            message: "Your Property Has been created"
        });
    } catch (error) {
        throw new Error(error);
    }
});


//Update a Product
const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        };
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, { new: true, });
        res.json({
            updateProduct,
            message: "Your Property has Been Updated"
        })
    } catch (error) {
        throw new Error(
            error,
            message = "Ohh! There has some issuse with this Property"
        );
    }
});

//Delete a Product
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await Product.findByIdAndDelete(id, { new: true });
        res.json({
            deleteProduct,
            message: "Your Property has been successfully Deleted"
        })
    } catch (error) {
        throw new Error(
            error,
            message = "Ohh! Some thing wrong with this Property, Please Try later"
        );
    }
})

//Get a Product 
const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const findproduct = await Product.findById(id);
        res.json({
            findproduct,
            message: "This is Your Property Details"
        })
    } catch (error) {
        throw new Error(
            error,
            message = "ohh! there has no Property with this id"
        );
    }
});

//get all Product 
const getAllProduct = asyncHandler(async (req, res) => {
    try {
        //Filtering
        const queryObj = { ...req.query };
        const excludeFields = ["page", "sort", "limit", "fields"];
        excludeFields.forEach((el) => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        let query = Product.find(JSON.parse(queryStr));

        //Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }

        //limiting the fields
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join("");
            query = query.select(fields);
        } else {
            query = query.select("-__v")
        }

        //Pagination
        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error("This Page is not exists");
        }
        const product = await query;
        res.json({
            product,
            message: "Here has some Property for you"
        })
    } catch (error) {
        throw new Error({
            error,
            message: "ohh! thare has something wrong please try after some time"
        })
    }
})

//Put Rating to Product 
// const rating = asyncHandler(async (req, res) => {
//     const { _id } = req.user;
//     const { star, prodId, comment } = req.body;
//     try {
//         const product = await Product.findById(prodId);
//         let alreadyRated = product.ratings.find(
//             (userId) => userId.postedby.toString() === _id.toString()
//         );
//         if (alreadyRated) {
//             const updateRating = await Product.updateOne(
//                 {
//                     ratings: {
//                         $elemMatch: alreadyRated,
//                     },
//                 },
//                 {
//                     $set: { "ratings.$.star": star, "ratings.$.comment": comment },
//                 },
//                 { new: true }
//             );
//         } else {
//             const rateProduct = await Product.findByIdAndUpdate(
//                 prodId,
//                 {
//                     $push: {
//                         ratings: {
//                             star: star,
//                             comment: comment,
//                             postedby: _id,
//                         },
//                     },
//                 },
//                 {
//                     new: true,
//                 }
//             );
//         }
//         //Get all ratings
//         const getallratings = await Product.findById(prodId);
//         let totalRating = getallratings.ratings.length;
//         let ratingsum = getallratings.ratings
//             .map((item) => item.star)
//             .reduce((prev, curr) => prev + curr, 0);
//         let actualRating = Math.round(ratingsum / totalRating);
//         let finalproduct = await Product.findByIdAndUpdate(
//             prodId,
//             {
//                 totalrating: actualRating,
//             },
//             { new: true }
//         );
//         res.json(
//             finalproduct,
//             message = "Thankyou for giving your review on this property."
//         );
//     } catch (error) {
//         throw new Error(
//             error,
//             message = "Ohh! You have something wrong please try after some time."
//         );
//     }
// });

module.exports = { createProduct, updateProduct, getaProduct, getAllProduct, deleteProduct };