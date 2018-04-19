
const pagesOrder = {
  index: 0,
  profile: 1,
}
export function slideTransition(to, from) {
  if (! to || ! from) {
    return {}
  }
  return pagesOrder[to.name]  > pagesOrder[from.name] ? {
    name: "slide-up",
    mode: null,
  } : {
    name: "slide-down",
    mode: null,
  }
}
