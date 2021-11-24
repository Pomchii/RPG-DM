import { DnDProvider } from "../../providers/implementation/DnDProvider";
import { FindDndClass } from "./FindDndClass"
import { FindDndClassController } from "./FindDndClassController";

const dndProvider = new DnDProvider();

const findDndClass = new FindDndClass(dndProvider);
const findDndClassController = new FindDndClassController(findDndClass);

export { findDndClass, findDndClassController }