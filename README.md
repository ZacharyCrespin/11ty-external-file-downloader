# 11ty-external-file-downloader

## Usage
### Install
`npm i 11ty-external-file-downloader`

### Basic Usage
```js
// .eleventy.js
const downloader = require('11ty-external-file-downloader');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(downloader, {
    urls: [
      'https://zcss.zacharyc.site/z.min.css',
      'https://zcss.zacharyc.site/prism.min.css'
    ]
  });
}
```
### Options
`urls`
  - default: `[]`
  - syntax: list

`directory`
  - default: `_site/external`
  - syntax: a string reletive to root dir

`fileName`
  - default: `[name].[ext]`
  - syntax: string
    - `[name]` = the original file name (excluding extention)
    - `[ext]` = the extention of the original file
