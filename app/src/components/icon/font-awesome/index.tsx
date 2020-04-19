import { IconDefinition } from "@fortawesome/fontawesome-common-types";

import {
  faArrowUp,
  faArrowDown,
  faBars,
  faChevronDown,
  faCog,
  faCompressArrowsAlt,
  faDownload,
  faEdit,
  faEquals,
  faExclamationCircle,
  faExpand,
  faHome,
  faMinus,
  faPalette,
  faPlus,
  faSearch,
  faTimes,
  faUndoAlt,
  faUpload
} from "@fortawesome/free-solid-svg-icons";

import {
  faCheckCircle,
  faQuestionCircle,
  faSave,
  faTrashAlt
} from "@fortawesome/free-regular-svg-icons";

const icons: { [key: string]: IconDefinition } = {
  arrowDown: faArrowDown,
  arrowUp: faArrowUp,
  bars: faBars,
  chevronDown: faChevronDown,
  cog: faCog,
  compress: faCompressArrowsAlt,
  download: faDownload,
  edit: faEdit,
  equals: faEquals,
  error: faExclamationCircle,
  expand: faExpand,
  home: faHome,
  minus: faMinus,
  palette: faPalette,
  plus: faPlus,
  question: faQuestionCircle,
  save: faSave,
  search: faSearch,
  success: faCheckCircle,
  times: faTimes,
  trash: faTrashAlt,
  undo: faUndoAlt,
  upload: faUpload
};

export default icons;
