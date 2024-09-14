import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
            required: false,
        },
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            unique: true,
            required: true
        },
        phone: {
            type: String,
            required: true,
            minLength: 12,
            maxLength: 12,
        },
        email: {
            type: String,
            unique: true
        },
        role: {
            type: String,
            enum: {
                values: ["user", "admin", "super-admin"],
            },
            required: true,
            default: "user",
        },
        birthDate: {
            type: Date,
            required: true,
        },
        image_url: {
            type: String,
            required: false,
        },
        passwordResetToken: {
            type: String,
        },
        passwordResetTokenExpireTime: {
            type: Date,
        }
    },
    {
        collection: "users",
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);