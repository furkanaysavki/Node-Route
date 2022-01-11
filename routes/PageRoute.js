const express= require('express')
const pagecontroller= require('../controllers/pagecontroller');
const router=express.Router();
router.route('/').get(pagecontroller.getIndexPage);
module.exports= router;
