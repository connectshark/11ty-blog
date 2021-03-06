const markdownIt = require('markdown-it')
const markdownItp = require('markdown-it')()
const markdownItAnchor = require('markdown-it-anchor')
const markdownItContainer = require('markdown-it-container')
const markdownItTableOfContents = require("markdown-it-table-of-contents")
const pluginNavigation = require('@11ty/eleventy-navigation')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const tagController = require('./src/_11ty/getTagList')

module.exports = eleventyConfig => {
  eleventyConfig.addWatchTarget('src/css/**.css')


  eleventyConfig.addShortcode('version', function () {
    return String(Date.now())
  })

  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy({ 'public/' : '.' })

  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginSyntaxHighlight)

  eleventyConfig.addCollection("tagList", tagController);

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
  .use(markdownItAnchor, {
    level: [2,3,4]
  })
  .use(markdownItTableOfContents, {
    includeLevel: [1, 2, 3, 4]
  })
  .use(markdownItContainer, 'summary', {
    validate: function (params) {
      return params.trim().match(/^spoiler\s+(.*)$/);
    },
    render: function (tokens, idx) {
      var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return '<details><summary>' + markdownItp.utils.escapeHtml(m[1]) + '</summary>\n';
      } else {
        return '</details>\n'
      }
    }
  })
  .use(markdownItContainer, "success")
  .use(markdownItContainer, "info")
  .use(markdownItContainer, "warning")
  .use(markdownItContainer, "danger")
  eleventyConfig.setLibrary("md", markdownLibrary)
  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    markdownTemplateEngine: 'njk'
  }
}