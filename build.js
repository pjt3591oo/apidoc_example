let path = require('path')
let { createDoc } = require('apidoc')

const doc = createDoc({
  src: path.resolve(__dirname, 'src'),
  dest: path.resolve(__dirname, 'docs')
})

if (typeof doc !== 'boolean') {
  // Documentation was generated!
  console.log(doc.data) // `api_data.json` file content
  console.log(doc.project) // `api_project.json` file content
}