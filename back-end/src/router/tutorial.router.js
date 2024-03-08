import express from "express";
import TutorialController from '../controller/tutorial.controller.js'
const tutorialRouter = express.Router();


tutorialRouter.get("/", TutorialController.getAllTutorial);
tutorialRouter.get("/:id/comments", TutorialController.getCommentById);
tutorialRouter.post("/:id/comments",TutorialController.addComment)

// tutorialRouter.post("/create", ProductController.createProduct);
// tutorialRouter.delete("/delete/:id", ProductController.deleteProduct);



export default tutorialRouter;