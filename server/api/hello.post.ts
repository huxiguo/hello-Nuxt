export default defineEventHandler(async event => {
  const method = getMethod(event)
  const query = getQuery(event)
  const body = await readBody(event)
  return {
    code: 200,
    data: {
      name: 'zs',
      age: 18,
      method,
      query,
      body
    }
  }
})
