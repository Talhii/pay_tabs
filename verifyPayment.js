var express = require('express');
var router = express.Router();

const  paytabs = require('paytabs_api');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({extended: false}));


router.post('/verify',(req,res)=>{
    paytabs.verifyPayment({
        'merchant_email':'aziz.mehoo@hotmail.com',
        'secret_key':'qzqXF6n29LLN877eGlN5fKYd6oefdRjErKB7RY90KUNS2U6JgTOvEMIKbXZpPj3g4EoVDxVnsJfvEmeUg3qUP9E17DqWXtd18BWL',
        'payment_reference': req.body.p_id ,
    },verifyPayment);
     
    function verifyPayment(result){
        res.send(result);
    }
})

module.exports = router;