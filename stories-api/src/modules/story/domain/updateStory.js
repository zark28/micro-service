// Sterilize
const {sterilizeMany} = require("../../shared/sterilize");  
const { update } = require("../dbSchema");

//Is string
const notString = (data) => data && typeof data !=="string";

// Validate
const validateStory = (unvalidateStory) => {
  let errMgs = "";
  let data = sterilizeMany(unvalidateStory);

  const msg = "must be alpha-numeric";

  if (notString(data.title)) errMgs += `Title ${msg}` ;
  if (notString(data.content)) errMgs += `Content ${msg}`;
  if (notString(data.image))  errMgs += `Image ${msg}`;
  

  // Prepare validate
  return { data, isValid: errMgs.length < 1, message: errMgs };
};

// Update a new story
const updateStory = (unvalidateStory) => {
  // Validate Story
  const { data, isValid, message } = validateStory(unvalidateStory);

  // Check if data is valid
  if (isValid) {
    const update = {};

    if(data.title)update.title = data.title;
    if(data.content)update.content = data.content;
    if(data.image)update.image = data.image;
    return {tag: "passed", data: update};};

  // Return Story
  return { tag: "failed", message };
};

module.exports = updateStory;
