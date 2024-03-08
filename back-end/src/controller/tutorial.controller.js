import Categories from "../models/categories.js"
import Comment from "../models/comment.js"
import Tutorial from "../models/tutorials.js"
const TutorialController = {
    getAllTutorial: async (req, res) => {
        try {
            const tutorial = await Tutorial.find().populate('category').populate("comments")
            return res.status(201).json(tutorial)
        } catch (error) {
            return res.status(500).json({ message: "Server Error" + error })
        }
    },
    getCommentById : async (req,res) => {
        const {id} = req.params;
        try {
            Comment.findById(id).then(data => {
                return res.status(200).json({
                    username: data.username,
                    text: data.text
                })
            })
        } catch (error) {
            
        }
    },
    addComment: async (req,res) => {
        const {id} = req.params;
        try {
            const { username, text} = req.body
            const newComment = await Comment.create({ username, text})
            const tutorial = await Tutorial.findById(id);
            tutorial.comments = [...tutorial.comments, newComment.id]
            await tutorial.save();
            return res.status(200).json({
                data: newComment,
                statusCode: 200
            })
        } catch (error) {
            throw error
        }
    }

    

    

}

export default TutorialController