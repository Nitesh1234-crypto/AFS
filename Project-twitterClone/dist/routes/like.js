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
router.post("/:id", auth_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    const userid = req.user.id;
    let like = yield prisma.like.findFirst({
        where: {
            tweetid: Number(id),
            userid: userid
        }
    });
    if (like != null) {
        yield prisma.like.delete({
            where: {
                id: like.id
            }
        });
        yield prisma.twitt.update({
            where: {
                id: Number(id)
            },
            data: {
                likeCount: {
                    decrement: 1
                }
            }
        });
        return res.send("tweet unliked");
    }
    let newlike = yield prisma.like.create({
        data: {
            tweetid: parseInt(id),
            userid: userid
        }
    });
    yield prisma.twitt.update({
        where: {
            id: Number(id)
        },
        data: {
            likeCount: { increment: 1 }
        }
    });
    res.send({ newlike });
}));
router.get("/:id", auth_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let like = yield prisma.like.findMany({
        where: {
            tweetid: Number(id)
        },
        select: {
            user: true
        }
    });
    res.send({ like });
}));
exports.default = router;
