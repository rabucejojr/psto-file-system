const express = require('express')
const router = express.Router()
const { getDocs } = require('../controllers/documentController')

//get all documents
router.get('/', getDocs)

//get single document

// upload / post document

// delete document

// upload document

//export

module.exports = router
