const router = require("express").Router();
const officialsCtrl = require("../controllers/officials");

router.get("/", officialsCtrl.index);
router.get("/:id", officialsCtrl.show);

module.exports = router;
