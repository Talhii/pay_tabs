const  paytabs = require('paytabs_api');
const express = require('express')
const app = express()

var verifypayment = require('./verifypayment');
var validatekey = require('./validatekey');

var bodyParser = require('body-parser');
const { json } = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

app.use('/validatekey',validatekey)
app.use('/verifypayment',verifypayment)


app.post('/createpaypage',(req,res)=>{

    paytabs.createPayPage({
        'merchant_email':'aziz.mehoo@hotmail.com',
        'secret_key':'qzqXF6n29LLN877eGlN5fKYd6oefdRjErKB7RY90KUNS2U6JgTOvEMIKbXZpPj3g4EoVDxVnsJfvEmeUg3qUP9E17DqWXtd18BWL',
        'currency':'SAR',//change this to the required currency
        'amount': req.body.amount,//change this to the required amount
        'site_url':'Theveroo.com',//change this to reflect your site
        'title':'Order for Shoes',//Change this to reflect your order title
        'quantity':req.body.quantity,//Quantity of the product
        'unit_price':req.body.unit_price, //Quantity * price must be equal to amount
        'products_per_title':'Bags', //Change this to your products
        'return_url':'Theveroo.com',//This should be your callback url
        'cc_first_name':req.body.cc_first_name,//Customer First Name
        'cc_last_name':req.body.cc_last_name,//Customer Last Name
        'cc_phone_number':req.body.cc_phone_number, //Country code
        'phone_number':req.body.phone_number, //Customer Phone
        'billing_address':req.body.billing_address, //Billing Address
        'city':req.body.city,//Billing City
        'state':req.body.state,//Billing State
        'postal_code':req.body.postal_code,//Postal Code
        'country':req.body.ISO_countrycode,//Iso 3 country code
        'email':req.body.email,//Customer Email
        'ip_customer':'<CUSTOMER IP>',//Pass customer IP here
        'ip_merchant':'<MERCHANT IP>',//Change this to your server IP
        'address_shipping':req.body.address_shipping,//Shipping Address
        'city_shipping':req.body.city_shipping,//Shipping City
        'state_shipping':req.body.state_shipping,//Shipping State
        'postal_code_shipping':req.body.postal_code_shipping,
        'country_shipping':req.body.country_shipping,
        'other_charges':0,//Other chargs can be here
        'reference_no':req.body.reference_no,//Pass the order id on your system for your reference
        'msg_lang':'en',//The language for the response
        'cms_with_version':'Nodejs Lib v1',//Feel free to change this
    },createPayPage);
     
    function createPayPage(result){
        if(result.response_code == 4012){
            //Customer to the payment link for paying
            res.send(result);// url and p_id outputs ....check payment status with this p_id also verify payment through this p_id
        }else{
            //Handle the error
            res.send(result);
        }
    }
})


app.listen(3000)