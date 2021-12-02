exports.getPosts = (req, res) => {
  res.status(200).json({
    posts: [{
      title: 'First title',
      content: 'First content'
    }]
  });
};

exports.postPost = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  // => create data in database here
  res.status(201).json({
    message: 'Post success!',
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content
    }
  })
}