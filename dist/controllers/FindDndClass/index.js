"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDndClassController = exports.findDndClass = void 0;
var DnDProvider_1 = require("../../providers/implementation/DnDProvider");
var FindDndClass_1 = require("./FindDndClass");
var FindDndClassController_1 = require("./FindDndClassController");
var dndProvider = new DnDProvider_1.DnDProvider();
var findDndClass = new FindDndClass_1.FindDndClass(dndProvider);
exports.findDndClass = findDndClass;
var findDndClassController = new FindDndClassController_1.FindDndClassController(findDndClass);
exports.findDndClassController = findDndClassController;
//# sourceMappingURL=index.js.map