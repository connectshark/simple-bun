import { Hono } from 'hono'
import { etag } from 'hono/etag'
import { logger } from 'hono/logger'
import { poweredBy } from 'hono/powered-by'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'

const app = new Hono()
app.use(poweredBy())
app.use(etag(), logger())
app.use(cors())
app.use(prettyJSON())

app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default { 
  port: Bun.env.PORT ?? 3000, 
  fetch: app.fetch, 
} 
