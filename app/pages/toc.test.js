const assert = require('assert')
const { buildTocItems } = require('./toc')

function heading(level, id, text) {
  return { level, id, text }
}

const headings = [
  heading(1, 'intro', 'Intro'),
  heading(2, 'usage', 'Usage'),
  heading(5, 'detail', 'Too deep'),
  heading(3, '', 'Missing id'),
  heading(3, 'api', ''),
  heading(4, 'options', 'Options'),
]

assert.deepStrictEqual(buildTocItems(headings), [
  { id: 'intro', text: 'Intro', level: 1 },
  { id: 'usage', text: 'Usage', level: 2 },
  { id: 'options', text: 'Options', level: 4 },
])

assert.deepStrictEqual(buildTocItems(headings, 2), [
  { id: 'intro', text: 'Intro', level: 1 },
  { id: 'usage', text: 'Usage', level: 2 },
])
