export default defineEventHandler((event) => {
  if (event.path === '/') {
    return sendRedirect(event, '/?url=https://example.com')
  }

  return `event.path = ${event.path}`
})
