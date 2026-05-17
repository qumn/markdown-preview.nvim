function buildTocItems(headings, maxLevel = 4) {
  return headings
    .filter(({ level, id, text }) => level <= maxLevel && id && text)
    .map(({ level, id, text }) => ({
      id,
      text,
      level,
    }))
}

function getTocItems(root, maxLevel = 4) {
  if (!root) {
    return []
  }

  const headings = Array.from(root.querySelectorAll('h1, h2, h3, h4, h5, h6'))
    .map((heading) => ({
      level: Number(heading.tagName.slice(1)),
      id: heading.id,
      text: heading.textContent.trim(),
    }))

  return buildTocItems(headings, maxLevel)
}

function scrollToHeading(id) {
  const heading = document.getElementById(id)

  if (heading) {
    heading.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

module.exports = {
  buildTocItems,
  getTocItems,
  scrollToHeading,
}
