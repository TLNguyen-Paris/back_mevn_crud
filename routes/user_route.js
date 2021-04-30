const express = require('express');
const User = require('./../models/User_model')
const router = express.Router();


// Get User route
router.route('/').get((req, res) => {
    User.find( (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Create User route
router.route('/create-user').post((req,res,next) => {
    User.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(req.body);
            res.json(data)
        }
    })
})

// Find User by id Route
router.route('/find-user/:id').get((req,res) => {
    User.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Student route
router.route('/update-user/:id').post((req,res,next) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error,data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log("Student is updated");
        }
    })
})

// User Delete Route
router.route('/delete-user/:id').delete((req,res,next) => {
    User.findByIdAndDelete(req.params.id, (error,data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({msg:data})
        }
    })
})


module.exports = router;