const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb://localhost:27017/myapp2" ||
				"mongodb+srv://koko:koko123456@cluster0.gzkpp.mongodb.net/smartDatabase?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useFindAndModify: false,
				useCreateIndex: true,
				useUnifiedTopology: true,
			}
		);
		console.log("MongoDB Connected");
	} catch (err) {
		console.error("Could not connect to MongoDB...");
	}
};

module.exports = connectDB;
