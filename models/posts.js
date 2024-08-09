const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

const imgSchema = new mongoose.Schema(
   {
   img: String,
   description: String,
   },
  { timestamps: true }
)

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    images: [{type: String}],
    comments: [commentSchema],
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;