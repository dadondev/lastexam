import { createContext } from "react";

const ShowNewInVoice = createContext({
  show: false,
  closeModal: () => {},
  showModal: () => {},
});
export default ShowNewInVoice;
  