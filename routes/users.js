const express = require("express");
const router = express.Router();
const User = require("../models/User");
const validateUser = require("../models/User");

//Get all users
router.get("/", async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

//Get user by Id
router.get("/:id", async (req, res) => {
	const user = await User.findById(req.params.id);
	if (!user) return res.status(400).send("Invalid Id");

	res.json(user);
});

// Add new user
router.post("/", async (req, res) => {
	try {
		const { firstName, lastName, age, dob } = req.body;
		const user = new User({ firstName, lastName, age, dob });

		await user.save();
		res.status(201).json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// Update existing user
router.put("/:id", async (req, res) => {
	const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	});
	if (!user) return res.status(400).send("Invalid Id");

	res.json(user);
});

module.exports = router;
