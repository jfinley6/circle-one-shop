const mongoose = require("mongoose");

const discSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter disc name"],
            trim: true,
            maxLength: [100, "Disc name can't exceed 100 characters"],
        }, // Name (e.g., "Destroyer")
        brand: {
            type: String,
            required: true,
            trim: true,
            maxLength: [25, "Disc brand can't exceed 25 characters"],
        }, // Brand (e.g., "Innova")
        mold: {
            type: String,
            required: true,
            trim: true,
            maxLength: [25, "Disc mold can't exceed 25 characters"],
        }, // Mold (e.g., "Fairway Driver")
        weight: {
            type: Number,
            required: true,
        }, // Weight in grams
        condition: {
            type: String,
            enum: ["New", "Used"],
            required: true,
        }, // Disc condition
        color: {
            type: String,
            required: true,
        }, // Color of the disc
        speed: {
            type: Number,
            min: 1,
            max: 14,
            required: true,
        }, // Speed rating
        glide: {
            type: Number,
            min: 1,
            max: 7,
            required: true,
        }, // Glide rating
        turn: {
            type: Number,
            min: -5,
            max: 1,
            required: true,
        }, // Turn rating
        fade: {
            type: Number,
            min: 0,
            max: 5,
            required: true,
        }, // Fade rating
        price: {
            type: Number,
            required: [true, "Please enter disc price"],
            min: [0, "Price cannot be negative"],
            default: 0.0,
        }, // Price in dollars
        description: {
            type: String,
            required: [true, "Please enter disc description"],
            trim: true,
        }, // Disc description
        images: [
            {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            },
        ],
        seller: {
            type: String,
            required: [true, "Please enter disc seller"],
        },
        stock: {
            type: Number,
            required: [true, "Please enter the quantity of discs"],
            min: [0, "Stock cannot be negative"],
            default: 0,
        }, // disc stock
        reviews: [
            {
                name: {
                    type: String,
                    required: true,
                },
                rating: {
                    type: Number,
                    required: true,
                },
                comment: {
                    type: String,
                },
            },
        ], // Disc user rating
        numofReviews: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Disc", discSchema);
