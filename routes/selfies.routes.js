const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

router.get("/", ctrls.selfies.index);

router.get("/one", ctrls.selfies.one)

router.post("/", ctrls.selfies.create);

router.put("/:id", ctrls.selfies.update);

router.delete("/:id", ctrls.selfies.destroy);


module.exports = router;
