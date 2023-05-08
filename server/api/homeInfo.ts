export default defineEventHandler(event => {
  let { req, res } = event.node

  return {
    code: 200,
    data: {
      name: 'seekhoo',
      age: 18
    }
  }
})
