import { createContext } from "react";

const ShowModal = createContext({
  show: false,
  showModal: () => {},
  closeModal: () => {},
});

export default ShowModal;
