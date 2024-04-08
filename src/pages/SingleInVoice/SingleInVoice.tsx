import { useContext, useEffect, useState } from "react";
import ShowModal from "../../context/showEdit";
import Button from "../../general/components/Button";
import Actions from "./components/Actions";
import Content from "./components/Content";
import Header from "./components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { onValue, ref, update } from "firebase/database";
import { realDB } from "../../firebase/firebase";
import { createPortal } from "react-dom";
import EditModal from "../../general/components/EditModal";
import { toast } from "sonner";

const SingleInVoice = () => {
  const { show, showModal, closeModal } = useContext(ShowModal);
  const [data, setData] = useState<object>({});
  const [loding, setLoading] = useState(true);
  const navigte = useNavigate();
  const srcParams = useParams();
  const getInVoice = () => {
    onValue(ref(realDB, "datas/" + srcParams.id), (snap) => {
      if (snap.exists()) {
        setLoading(false);
        setData(snap.val());
      } else {
        navigte("/");
      }
    });
  };
  useEffect(() => {
    getInVoice();
  }, []);

  return loding ? (
    <div className="h-full w-full flex items-center justify-center">
      <img src="/load.gif" alt="load" />
    </div>
  ) : (
    <div
      className="w-full max-h-dvh relative"
      onClick={() => {
        if (show) {
          closeModal();
        }
      }}
    >
      <div className="lg:max-w-[730px] px-6 md:pb-10  mx-auto pt-8 w-full">
        <Header />
        <Actions data={data} />
        <Content data={data} />
      </div>

      <div className="md:hidden relative mt-[56px] justify-around w-full bottom-0 z-50 flex gap-2 shm:items-center bg-white py-5 px-6 dark:bg-darkBlue transition-all">
        <Button
          type="edit"
          onClick={() => {
            showModal();
          }}
        />
        <Button
          type="delete"
          onClick={() => {
            const e: any | null = document.getElementById("delete");
            if (e) e.showModal();
          }}
        />
        <Button
          type="mark"
          className="sxm:text-[9px] shm:text-[13px]"
          onClick={() => {
            update(ref(realDB, "datas/" + srcParams.id), {
              type: "paid",
            }).then(() => {
              toast.success("The invoice type updated !");
            });
          }}
        />
      </div>
      {createPortal(<EditModal />, document.body)}
    </div>
  );
};

export default SingleInVoice;
