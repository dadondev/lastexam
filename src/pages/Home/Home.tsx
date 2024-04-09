import { useEffect, useState } from "react";
import ShowNewInVoice from "../../context/newInVoice";
import InVoices from "./components/InVoices";
import InVoicesController from "./components/InVoicesController";
import { createPortal } from "react-dom";
import NewInVoice from "../../general/components/NewInVoice";
import { onValue, ref } from "firebase/database";
import { realDB } from "../../firebase/firebase";

const Home = () => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const [trueData, setTrueData] = useState<any[]>([]);
  const [ids, setIds] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const showModal = () => setShow(true);

  const getData = () => {
    onValue(ref(realDB, "datas/"), (snap) => {
      if (snap.val()) {
        setTrueData(Object.values(snap.val()));
        setIds(Object.keys(snap.val()));
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ShowNewInVoice.Provider
      value={{
        show,
        showModal,
        closeModal,
      }}
    >
      <div
        onClick={() => {
          if (show) closeModal();
        }}
        className="min-h-full w-full"
      >
        {!loading ? (
          <main className="w-ful pt-8 lg:px-0 px-6 overflow-x-hidden lg:max-w-[730px] lg:mx-auto  flex lg:py-16 flex-col items-center lg:max-h-dvh md:pt-14">
            <InVoicesController
              filter={filter}
              setFilter={setFilter}
              inVoices={trueData?.length ? trueData.length : 0}
            />
            <InVoices
              ids={ids}
              datas={
                filter === "all"
                  ? trueData
                  : trueData?.filter(
                      (e) => e.type === filter.toLocaleLowerCase()
                    )
              }
            />
          </main>
        ) : (
          <span className="dark:text-white text-xl text-black">Loading</span>
        )}
      </div>

      {createPortal(<NewInVoice />, document.body)}
    </ShowNewInVoice.Provider>
  );
};

export default Home;
