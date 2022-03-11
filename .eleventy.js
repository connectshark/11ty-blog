const markdownIt = require('markdown-it')
const markdownItp = require('markdown-it')()
const markdownItAnchor = require('markdown-it-anchor')
const markdownItContainer = require('markdown-it-container')
const markdownItTableOfContents = require("markdown-it-table-of-contents")
const pluginNavigation = require('@11ty/eleventy-navigation')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const slugify = require('slugify')
const now = String(Date.now())
module.exports = eleventyConfig => {
  eleventyConfig.addWatchTarget('src/css/**.css')


  eleventyConfig.addShortcode('version', function () {
    return now
  })

  eleventyConfig.addFilter('postDate', dateObject => {
    return dateObject
  })

  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy({ 'public/' : '.' })

  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginSyntaxHighlight)

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
  .use(markdownItTableOfContents)
  .use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "before",
      class: "direct-link",
      space: false,
      level: [2,3,4],
      slugify: (str) =>
        slugify(str, {
          lower: true,
          strict: true,
          remove: /["]/g,
        })
    }),
    slugify: eleventyConfig.getFilter("slug")
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