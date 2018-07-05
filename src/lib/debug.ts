import {PuzzleJs} from "./puzzle";
import {Core} from "./core";
import {Info} from "./modules/info";
import {Variables} from "./modules/variables";
import {Fragments} from "./modules/fragments";

(function () {
  const MODULES = {
    Core,
    Info,
    Variables,
    Fragments
  };

  window.PuzzleJs = new PuzzleJs();
  window.PuzzleJs.inject(MODULES);
})();

