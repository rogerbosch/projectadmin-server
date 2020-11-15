//routes to create users
const express = require('express');
const router =express.Router();

//api/users

router.post('/',()=>{
    console.log('creando usuario');
});
module.exports = router;