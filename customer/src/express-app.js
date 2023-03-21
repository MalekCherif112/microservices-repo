const express = require('express');
const cors  = require('cors');
const { customer } = require('./api');
const HandleErrors = require('./utils/error-handler');

module.exports = async (app,channel) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    // app.use(cors({ origin: "http://localhost/customer:8001", credentials: true}));
    // app.use(cors({origin: "*", credentials: true}))
    // app.use(cors({ origin: "http://customer:8001", credentials: true}));

    app.use(cors());
    app.use(express.static(__dirname + '/public'))


    //api
    customer(app,channel);

    // error handling
    app.use(HandleErrors);
    
}