const _context = require('mongoose')

const user = _context.Schema({
    _id:        {type: String, required: true},
    firstName:  { type: String, required: true,},
    lastName:   { type: String, required: true, },
    email:      { type: String, required: true, unique: true },
    created:    { type: Date, default: Date.now },
    modified:    { type: Date, default: Date.now }
})

module.exports = _context.model('User', user)