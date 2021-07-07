const app = require('./app')
const _context = require('mongoose')
require('dotenv').config();

const port = process.env.WEB_PORT || 9999

// webserver
app.listen(port, () => console.log(`webserver at: ${process.env.WEB_URL}:${port}`))

// mongodb with mongoose
_context.set('useCreateIndex', true).connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log(_context.connection.readyState))