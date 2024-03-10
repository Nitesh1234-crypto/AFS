"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = "ishit";
const createJwtToken = (user) => {
    return jsonwebtoken_1.default.sign(user, secretKey, { expiresIn: "24h" });
};
exports.createJwtToken = createJwtToken;
const verifyToken = (req, res, next) => {
    console.log(req.cookies);
    let token = req.cookies.token;
    let decode = jsonwebtoken_1.default.verify(token, secretKey);
    console.log(decode);
    if (decode) {
        req.user = decode;
        return next();
    }
    res.send("token invalid");
};
exports.verifyToken = verifyToken;
