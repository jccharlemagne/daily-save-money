_**Base server** - A basic [express.js](https://expressjs.com/) server which provides logging, cors and json body parsing_

## Usage
Add this package to your `package.json`

```json 
{
  "dependencies": {
    "@jccharlemagne/server": "1.0.0"
  }
}
```

And require it just like express 

```typescript
import app from "@jccharlemagne/server"

app.get('/', (req, res, next) => res.json({ message: 'Hello world !'}))

export default app
```
