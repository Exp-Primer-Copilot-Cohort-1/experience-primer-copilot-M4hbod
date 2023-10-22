// Create web server using express.js
exports.create = function(req, res) {
  // Create new comment
  var comment = new Comment(req.body);
  // Set current user as author
  comment.author = req.user;
  // Set current post as parent
  comment.parent = req.post;
  // Save comment
  comment.save(function(err) {
    if (err) {
      // If error, return 400
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      // If success, return comment
      res.json(comment);
    }
  });
}