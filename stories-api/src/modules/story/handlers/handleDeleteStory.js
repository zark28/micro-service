const Story = require("../dbSchema");

/**
 * This is a handler for Deleting story
 * @param {*} req
 * @param {*} res
 */
const handleDeleteStory = async (req, res) => {
  const {id} = req.params;
  const story = await Story.findByIdAndDelete({id});

  // Delete Story
  res.status(200).json({
    data: story,
    error: { code: null, message: null },
  });
};

module.exports = handleDeleteStory;
