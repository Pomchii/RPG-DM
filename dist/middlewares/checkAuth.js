"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function checkAuth(request, response, next) {
    try {
        var jsonToken = request.headers.authorization;
        var decoded = jsonToken.split(" ")[1];
        var user = jsonwebtoken_1.default.verify(decoded, "#l^UgAvRh5w9yf^JSw!&tcMNx!gMNm%Y0Hrmcy62O4x08MS2cx");
        request.user = user;
        next();
    }
    catch (error) {
        return response.status(401).send();
    }
}
exports.checkAuth = checkAuth;
//# sourceMappingURL=checkAuth.js.map