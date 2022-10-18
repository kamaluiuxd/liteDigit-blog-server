const { ObjectId } = require("mongodb");
const mongo = require("../connect");

//Get Posts
module.exports.getPosts = async (req, res) => {
	try {
		const PostsData = await mongo.selectedDb.collection("Posts").find().toArray();
		res.send(PostsData);
	} catch (err) {
		console.error(err);
		res.status(500).send(err);
	}
};

//Create Posts
module.exports.createPosts = async (req, res) => {
	try {
		const createdResponse = await mongo.selectedDb.collection("Posts").insertOne(req.body);
		res.send(createdResponse);
	} catch (err) {
		console.error(err);
		res.status(500).send(err);
	}
};

//Update Posts
module.exports.updatePosts = async (req, res) => {
	try {
		const id = req.params.id;
		const updatePostData = await mongo.selectedDb
			.collection("students")
			.findOneAndUpdate({ _id: ObjectId(id) }, { $set: { ...req.body } }, { returnDocument: "after" });
		res.send(updatePostData);
	} catch (err) {
		console.error(err);
		res.status(500).send(err);
	}
};

//Delete Posts
module.exports.deletePosts = async (req, res) => {
	try {
		const id = req.params.id;
		const deletePostData = await mongo.selectedDb.collection("Posts").remove({ _id: ObjectId(id) });
		res.send(deletePostData);
	} catch (err) {
		console.error(err);
		res.status(500).send(err);
	}
};
