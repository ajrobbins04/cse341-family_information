const express = require('express');
const router = express.Router();
const anniversaryController = require('../controllers/anniversaryController');
const { anniversaryValidator } = require('../middleware/anniversaryValidator');

// Create an Anniversary
router.post('/createanniversary', anniversaryValidator, anniversaryController.createAnniversary);

// Get a list of all anniversaries
router.get('/getall', anniversaryController.getAllAnniversaries);

// Get a single Anniversary by Individual id
router.get('/getbyindividual/:individualId', anniversaryController.getAnniversaryByIndividual);

// Get a single Anniversaries by Month
router.get('/getbymonth/:month', anniversaryController.getAnniversariesByMonth);

// Update a single Anniversary by id
router.put('/updateanniversary/:id', anniversaryValidator, anniversaryController.updateAnniversary);

// Delete an Anniversary by id
router.delete('/deleteanniversary/:id', anniversaryController.deleteAnniversary);

module.exports = router;