import express from "express";

// setup router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This works!");
});

export default router;
