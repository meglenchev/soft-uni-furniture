import jwt from "jsonwebtoken";

export function generateAuthToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
    };

    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '2h' });
}