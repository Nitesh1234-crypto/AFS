"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const auth_1 = require("../utils/auth");
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
router.post("/:tweetid", auth_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tweetid } = req.params;
    const userid = req.user.id;
    let retweeted = yield prisma.retweet.findFirst({
        where: {
            tweetid: Number(tweetid),
            retweetby: userid
        }
    });
    if (retweeted != null) {
        return res.send({ alredyretweeted: true });
    }
    let result = yield prisma.retweet.create({
        data: {
            tweetid: Number(tweetid),
            retweetby: userid
        }
    });
    yield prisma.twitt.update({
        where: {
            id: Number(tweetid)
        },
        data: {
            retweetCount: { increment: 1 }
        }
    });
    res.send({ result });
}));
router.delete("/:tweetid", auth_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tweetid } = req.params;
    const userid = req.user.id;
    let retweet = yield prisma.retweet.findFirst({
        where: {
            tweetid: Number(tweetid),
            retweetby: userid
        }
    });
    if (retweet != null) {
        let response = yield prisma.retweet.delete({
            where: {
                id: Number(tweetid),
                retweetby: userid
            }
        });
        yield prisma.twitt.update({
            where: {
                id: response.tweetid
            },
            data: {
                retweetCount: { decrement: 1 }
            }
        });
        res.send({ undo: true });
    }
    res.send("retweet does not exist");
}));
exports.default = router;
