import mongoose from "mongoose";

// create monogoose schema
const postSchema = new mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// turn schema into model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
