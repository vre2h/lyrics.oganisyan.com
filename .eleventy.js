module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addCollection("song", function(collection) {
    const coll = collection.getFilteredByTag("song");
  
    for(let i = 0; i < coll.length ; i++) {
      const prevSong = coll[i-1];
      const nextSong = coll[i + 1];
  
      coll[i].data["prevSong"] = prevSong;
      coll[i].data["nextSong"] = nextSong;
    }
  
    return coll;
  });
  
  return {
    passthroughFileCopy: true,
  };
};
