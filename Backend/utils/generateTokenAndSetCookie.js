
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, { 
		expiresIn: "90d",
	});

	res.cookie("jwt", token, {
		httpOnly: true, 
		maxAge: 90 * 24 * 60 * 60 * 1000, 
		sameSite: "strict", 
	});

	return token;
};

export default generateTokenAndSetCookie;


