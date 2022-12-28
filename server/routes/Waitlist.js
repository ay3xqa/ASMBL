const express = require("express");
const router = express.Router();
const { Waitlist } = require("../models");

router.get('/', async (req, res) =>{
    const waitlist = await Waitlist.findAll();
    res.json(waitlist);
});

router.post('/', async (req, res) => {
    const newMember = req.body;
    await Waitlist.create(newMember);
    res.json(newMember);
});

module.exports = router;