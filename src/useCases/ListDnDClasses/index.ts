import { DnDProvider } from "../../providers/implementation/DnDProvider";
import { ListDnDClasses } from "./ListDnDClasses";
import { ListDndClassesController } from "./ListDnDClassesController";

const dndProvider = new DnDProvider();

const listDndClasses = new ListDnDClasses(dndProvider);
const listDndClassesController = new ListDndClassesController(listDndClasses);

export {listDndClasses, listDndClassesController}