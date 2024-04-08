import { createPortal } from "react-dom";
import Button from "../../../general/components/Button";
import InVoiceTypes from "../../Home/components/InVoiceTypes";
import DeleteModal from "../../../general/components/DeleteModal";
import { useContext } from "react";
import ShowModal from "../../../context/showEdit";
import { auth, realDB } from "../../../firebase/firebase";
import { ref, update } from "firebase/database";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const Actions = ({ data }: { data: any }) => {
  const { showModal } = useContext(ShowModal);
  const params = useParams();
  return (
    <div className="md:max-w-full md:mx-0 md:px-8 md:mb-6 md:py-6 lg:max-w-[730px] mb-4 p-6  rounded-lg bg-white transition-all dark:bg-darkBlue mx-auto grid grid-cols-1 md:grid-cols-[180px_334px] md:justify-between">
      <div className="w-full items-center  md:gap-5 flex justify-between">
        <span className="font-medium dark:text-white text-special text-sm capitalize">
          status
        </span>
        <InVoiceTypes type={data.type ? data.type : ""} />
      </div>
      <div className="hidden md:flex gap-2 justify-end">
        <Button
          type="edit"
          onClick={() => {
            showModal();
          }}
        />
        {data.author === auth.currentUser?.email && (
          <Button
            type="delete"
            onClick={() => {
              const e: any | null = document.getElementById("delete");
              if (e) e.showModal();
            }}
          />
        )}
        {data.type !== "paid" && (
          <Button
            type="mark"
            onClick={() => {
              update(ref(realDB, "datas/" + params.id), {
                type: "paid",
              }).then(() => {
                toast.success("The invoice type updated !");
              });
            }}
          />
        )}
      </div>
      {createPortal(<DeleteModal />, document.body)}
    </div>
  );
};

export default Actions;
