const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        sqft: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        layout: {
            type: String,
            required: true,
        },
        stories: {
            type: String,
            required: true,
        },
        year_build: {
            type: Number,
            required: true,
        },
        property_tax: {
            type: String,
            required: true,
        },
        tax_assessment: {
            type: String,
            required: true,
        },
        tax_assessment: {
            type: String,
            required: true,
        },
        school_grades: {
            type: String,
            required: true,
        },
        lot_size: {
            type: String,
            required: true,
        },
        project_rental: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);