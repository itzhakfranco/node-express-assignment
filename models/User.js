const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 255,
	},

	lastName: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 255,
	},
	age: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 255,
	},
	dob: {
		type: String,
		required: true,
		minlength: 7,
		maxlength: 255,
	},
	createdAt: { type: Date, default: Date.now },
});

function validateUser(data) {
	const schema = Joi.object({
		firstName: Joi.string().min(2).max(255).required(),
		lastName: Joi.string().min(2).max(255).required(),
		age: Joi.string().min(2).max(255).required(),
		dob: Joi.string().min(7).max(255).required(),
	});
	return schema.validate(data);
}
module.exports = mongoose.model("User", userSchema);
exports.validateUser = validateUser;
