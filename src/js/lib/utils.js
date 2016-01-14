function compareLabel (a, b) {
  if (a.label < b.label) {
    return -1
  } else if (a.label > b.label) {
    return 1
  }
  return 0
}

export { compareLabel }
