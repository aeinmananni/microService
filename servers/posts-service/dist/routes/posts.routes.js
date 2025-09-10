"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controller_1 = require("../controllers/posts.controller");
const router = (0, express_1.Router)();
router.get('/GET/All', posts_controller_1.hadelGetPostsControll);
exports.default = router;
