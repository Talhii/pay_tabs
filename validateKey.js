var express = require('express');
var router = express.Router();
const  paytabs = require('paytabs_api');

router.post('/validate',(req,res)=>{
    paytabs.validateSecretKey({
        'merchant_email':'aziz.mehoo@hotmail.com',
        'secret_key':'qzqXF6n29LLN877eGlN5fKYd6oefdRjErKB7RY90KUNS2U6JgTOvEMIKbXZpPj3g4EoVDxVnsJfvEmeUg3qUP9E17DqWXtd18BWL',
    },validateSecretKey);
     
    function validateSecretKey(result){
       if(result.response_code ==4000){
            //Valid
            console.log(result);
       }else{
           //Failed
            console.log(result);
       }
    }
    
})

module.exports = router;