import { useContext, useRef, useState } from "react";
import TitleInvoice from "./TitleInvoice";
import SectionName from "./SectionName";
import { useForm } from "react-hook-form";
import FromSection from "./FromSection";
import ToSection from "./ToSection";
import ItemList from "./ItemList";
import Button from "./Button";
import { v4 as uuid } from "uuid";
import ShowNewInVoice from "../../context/newInVoice";
import { ref, set } from "firebase/database";
import { auth, realDB } from "../../firebase/firebase";
import { Toaster, toast } from "sonner";
const NewInVoice = () => {
  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();

    let month: number | string = date.getMonth() + 1;
    let day: number | string = date.getDate();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    const today = `${year}-${month}-${day}`;
    return today;
  };
  const formRef = useRef<null | HTMLFormElement>(null);
  const { register, handleSubmit } = useForm();
  const [items, setItems] = useState<any[]>([]);
  const { show, closeModal } = useContext(ShowNewInVoice);
  const [draft, setDraft] = useState(false);

  const onSubmit = (data: any) => {
    const obj = {
      ...data,
      invoiceDate: getDate(),
      items: items.filter(
        (e) => e.price.length > 0 && e.count.length > 0 && e.name.length > 0
      ),
      author: auth.currentUser?.email,
      type: draft ? "draft" : "pending",
      id: uuid().slice(0, 6).toUpperCase(),
    };

    if (items.length > 0) {
      set(ref(realDB, "datas/" + uuid()), { ...obj, items: [...items] })
        .then(() => {
          toast.success("Your invoice adding successfully");
        })
        .catch((e) => {
          toast.error(e.message);
        });

      closeModal();
      setDraft(false);
      if (formRef.current) {
        formRef.current.reset();
        setItems([]);
      }
    } else {
      toast.warning("You must add item !");
    }
  };

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        id="edit"
        className={
          "mt-0 absolute top-20 min-w-full pb-5 md:min-w-[616px] left-0 mx-0 md:max-w-[666px] min-h-[calc(100dvh-80px)] pt-[33px] lg:h-full lg:max-h-full lg:top-0 z-50 px-6 lg:pl-[110px] lg:z-0 bg-white lg:pt-0 lg:min-h-[100dvh] shadow-2xl shadow-[#000] dark:bg-dark delete__modal mb-0 h-auto overflow-auto lg:max-w-[830px] md:max-h-[calc(100dvh-80px)] " +
          (show ? "translate-x-0" : "-translate-x-full")
        }
      >
        <span
          className="flex md:hidden gap-3 items-center cursor-pointer md:mb-12 mb-8 lg:hover:text-gray dark:text-white text-black transition-all"
          onClick={() => closeModal()}
        >
          <img alt="image" src="/arrow-icon.svg" className="rotate-180 w-2" />
          <span className="font-bold">Go back</span>
        </span>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit, () => {
            console.log("error", draft);
          })}
        >
          <TitleInvoice id="" text="New Invoice" />
          <div className="pb-[88px]">
            <SectionName>Bill From</SectionName>
            <FromSection form={register} />
            <SectionName>Bill to</SectionName>
            <ToSection form={register} />
            <ItemList items={items} setItems={setItems} />
          </div>
          <div className="relative flex justify-between gap-2">
            <button
              onClick={() => setItems([])}
              type="reset"
              className="bg-calc px-6 rounded-3xl transition-all dark:bg-lightBlue font-bold text-blue dark:text-lightGray"
            >
              Discard
            </button>

            <article className="flex gap-8">
              <button type="submit" className="absolute -z-10">
                submit
              </button>
              <button
                onClick={() => setDraft(true)}
                type="submit"
                className="p-4 rounded-3xl px-6 bg-bg text-gray dark:text-lightGray font-bold lg:hover:opacity-80 transition-all"
              >
                Save draft
              </button>
              <Button
                type="mark"
                isSubmit={true}
                onClick={() => setDraft(false)}
                text="Save and Send"
              />
            </article>
          </div>
        </form>
      </div>
      <Toaster richColors position="top-right" />
    </>
  );
};

export default NewInVoice;
