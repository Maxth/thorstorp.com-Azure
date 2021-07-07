const _context = require('mongoose')

const product = _context.Schema({
    _id:     _context.Schema.Types.ObjectId,
    name:    { type: String, required: true, unique: true },
    desc:    { type: String, required: true },
    price:   { type: Number, required: true },
    image:   { type: String, required: false }
})

module.exports = _context.model('Product', product)