import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Header from "../general/components/Header";
import SingleInVoice from "./SingleInVoice/SingleInVoice";
import ShowModal from "../context/showEdit";
import { useState } from "react";
import Auth from "./Auth/Auth";
import Protect from "./Protect";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protect>
        <Home />
      </Protect>
    ),
  },
  {
    path: "/:id",
    element: <SingleInVoice />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

const Root = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
    <ShowModal.Provider
      value={{
        show,
        showModal,
        closeModal,
      }}
    >
      <div className="h-full w-full overflow-x-hidden">
        <Header />
        <div className="transition-all lg:min-h-full bg-lightBG dark:bg-dark max-h-[calc(100dvh-80px)] h-full sxm:overflow-auto">
          <RouterProvider router={router} />
        </div>
      </div>
    </ShowModal.Provider>
  );
};

export default Root;
