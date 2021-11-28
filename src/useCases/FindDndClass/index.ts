import { DnDProvider } from "../../providers/implementation/DnDProvider";
import { FindItemsProficiency } from "../FindItemsProficiency/FindItemsProficiency";
import { FindProficiencies } from "../FindProficiencies/FindProficiencies";
import { FindDndClass } from "./FindDndClass"
import { FindDndClassController } from "./FindDndClassController";

const dndProvider = new DnDProvider();

const findDndClass = new FindDndClass(dndProvider);
const findItemProficiencies = new FindItemsProficiency(dndProvider);

const findDndClassController = new FindDndClassController(
  findDndClass,
  findItemProficiencies
);

export { findDndClass, findDndClassController }