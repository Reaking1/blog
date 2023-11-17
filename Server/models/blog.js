// models/blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // Metrics object to store viewership data
  metrics: {
    views: {
      type: Number,
      default: 0,
    },
    averageDuration: {
      type: Number,
      default: 0,
    },
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
