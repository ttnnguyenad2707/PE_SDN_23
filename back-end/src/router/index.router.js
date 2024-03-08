
import express from "express";
import tutorialRouter from "./tutorial.router.js";
const indexRouter = express.Router();

indexRouter.use("/tutorials", tutorialRouter);

export default indexRouter;