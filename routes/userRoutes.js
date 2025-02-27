const express = require("express");
const router = express.Router();

const {getAll,getOne,create,update,remove}=require('./../controllers/userController')

router.get('/',getAll)
router.get('/get/:id',getOne)
router.post('/create',create)
router.post('/update', update)
router.delete('/delete/:id', remove)

module.exports=router