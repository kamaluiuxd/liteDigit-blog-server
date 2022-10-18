const { MongoClient } = require("mongodb");

module.exports = {
	selectedDb: [],
	async connect() {
		try {
			const client = await MongoClient.connect(process.env.DATA_URL);
			this.selectedDb = client.db("blog");
			console.log(this.selectedDb);
		} catch (error) {
			console.log(error);
		}
	},
};
