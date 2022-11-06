const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

router.get("/", ctrls.selfies.index);

router.post("/", ctrls.selfies.create);

module.exports = router;
