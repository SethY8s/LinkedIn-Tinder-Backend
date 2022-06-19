"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send('hello');
});
app.post('/data', (req, res) => {
    console.log(req.body);
    res.send('response from server');
});
app.listen(PORT, () => console.log('Running on Port 4000'));
