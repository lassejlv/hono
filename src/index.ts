import { Hono } from 'hono'
import { logger } from "hono/logger"
import { requestId } from 'hono/request-id'
import { getConnInfo } from 'hono/bun'



const app = new Hono()


app.use(logger());
app.use('*', requestId());

app.get('/', (c) => {
  const info = getConnInfo(c)

  const requestId = c.get("requestId");

  return c.json({
    message: "Hello World",
    requestId,
    info
  })
})

console.log("Server running!")

export default app
