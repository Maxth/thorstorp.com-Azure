// eslint-disable-next-line no-unused-vars
const { json } = require('express')

const User = require('../models/user')


exports.get = (req, res) => {
    
   
   if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    try {
        User.find()
        .then(data => res.status(200).json(data))
        .catch(() => res.status(500).json())   
    }
    catch {
        return res.status(500).json()
    }
} else {
    try {
        User.findOne({ _id: req.body._id })
        .then(data => res.status(200).json(data))
        .catch(() => res.status(404).json())   
    }
    catch {
        return res.status(500).json()
    }

}
}

exports.create = (req, res) => {
    try {
        User.findOne({ name: req.body.email })
        .then(data => {
            if(data !== null)
                return res.status(409).json()
            
            const newUser = new User({
                _id:    req.body._id,
                firstName:   req.body.firstName,
                lastName:   req.body.lastName,
                email:  req.body.email
            })

            newUser
            .save()
            .then(() => res.status(201).json())
            .catch(() => res.status(400).json())
        })
        .catch(() => res.status(500).json())   
    }
    catch {
        return res.status(500).json()
    }
}

exports.delete = (req, res) => {
    try {
        User.deleteOne({ _id: req.body._id })
        .then((user)=> {
            if (user == null) 
                return res.status(404).json()
        })
        .then(() => res.status(204).json())
        .catch(() => res.status(400).json())
    }
    catch {
        return res.status(500).json()
    }
}

exports.patch = (req, res) => {
    try {
        User.findOne({_id: req.body._id})
        .then((user) => {
            if (user == null) 
                return res.status(404).json()
            
            
                
                user.firstName =req.body.firstName
                user.lastName = req.body.lastName
                user.email =req.body.email
                
                user.modified = Date.now()
        

            user.save()
            .then(() => res.status(200).json())
            .catch(() => res.status(400).json())
            
            
        })
    } catch {
        return res.status(500).json()
    }

}