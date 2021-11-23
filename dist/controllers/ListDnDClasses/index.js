"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDndClassesController = exports.listDndClasses = void 0;
var DnDProvider_1 = require("../../providers/implementation/DnDProvider");
var ListDnDClasses_1 = require("./ListDnDClasses");
var ListDnDClassesController_1 = require("./ListDnDClassesController");
var dndProvider = new DnDProvider_1.DnDProvider();
var listDndClasses = new ListDnDClasses_1.ListDnDClasses(dndProvider);
exports.listDndClasses = listDndClasses;
var listDndClassesController = new ListDnDClassesController_1.ListDndClassesController(listDndClasses);
exports.listDndClassesController = listDndClassesController;
//# sourceMappingURL=index.js.map