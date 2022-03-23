module.exports = function(collection) {
  let tagSet = new Set()
  collection.getAll().forEach(item => {
    if( "tags" in item.data ) {
      let tags = item.data.tags
      tags = tags.filter(item => {
        switch(item) {
          case "all":
          case "nav":
          case "post":
          case "posts":
          case "financial":
          case "product":
          case "foods":
            return false
        }
        return true
      })
      for (const tag of tags) {
        tagSet.add(tag)
      }
    }
  })
  return [...tagSet]
}