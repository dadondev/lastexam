import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { child, get, ref, remove } from "firebase/database";
import { realDB } from "../../firebase/firebase";
import { Toaster, toast } from "sonner";

const DeleteModal = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const data = () => {
    get(child(ref(realDB), `datas/${params.id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setId(snapshot.val().id);
      } else {
        navigate("/");
      }
    });
  };
  const handleClick = (a?: string) => {
    if (a) {
      modalRef.current?.close();
    } else {
      remove(ref(realDB, "datas/" + params.id))
        .then(() => {
          toast.success("The invoice is deleted");
        })
        .catch((e) => {
          toast.error(e.message);
        });
      navigate("/");
    }
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <>
      <Toaster richColors position="top-right" />
      <dialog
        onClick={(e) => {
          e.stopPropagation();
          modalRef.current?.close();
        }}
        id="delete"
        ref={modalRef}
        className="min-w-full min-h-full relative delete__modal mb-0"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="px-8 py-[34px] w-full bg-white md:max-w-[480px] md:py-[51px] md:px-12 rounded-lg dark:bg-darkBlue max-w-[327px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          <h1 className="dark:text-white font-bold text-2xl text-black mb-2 md:mb-3">
            Confirm Deletion
          </h1>
          <p className="font-medium text-[13px] mb-5 text-gray">
            Are you sure you want to delete invoice #{id}? This action cannot be
            undone.
          </p>
          <div className="w-[200px] ml-auto flex gap-2">
            <button
              onClick={() => handleClick("cancel")}
              className="py-4 rounded-3xl px-6 bg-calc font-bold text-gray dark:text-lightGray dark:bg-lightBlue"
            >
              Cancel
            </button>
            <Button type="delete" onClick={() => handleClick()} />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteModal;
