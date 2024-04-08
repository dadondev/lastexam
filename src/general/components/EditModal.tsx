import { useContext, useEffect, useState } from "react";
import TitleInvoice from "./TitleInvoice";
import SectionName from "./SectionName";
import { useForm } from "react-hook-form";
import FromSection from "./FromSection";
import ToSection from "./ToSection";
import ItemList from "./ItemList";
import Button from "./Button";
import CancelBtn from "./CancelBtn";
import ShowModal from "../../context/showEdit";
import { child, get, ref, update } from "firebase/database";
import { realDB } from "../../firebase/firebase";
import { useParams } from "react-router-dom";
import { Toaster, toast } from "sonner";

const inputKeys = [
  "address",
  "author",
  "city",
  "clientAddress",
  "clientCity",
  "clientCode",
  "clientCountry",
  "clientName",
  "code",
  "country",
  "email",
  "id",
  "invoiceDate",
  "items",
  "paymentTerms",
  "project",
  "type",
];

const EditModal = () => {
  const [data, setData] = useState<any[]>([]);
  const [type, setType] = useState("");

  const { register, handleSubmit, setValue } = useForm();
  const params = useParams();

  const [id, setId] = useState("");

  const [items, setItems] = useState<any[] | any>([]);
  const { show, closeModal } = useContext(ShowModal);

  useEffect(() => {
    get(child(ref(realDB), "datas/" + params.id)).then((snapshot) => {
      if (snapshot.exists()) {
        setData(Object.values(snapshot.val()));
        setItems(snapshot.val()["items"]);
        setType(snapshot.val()["type"]);
      }
    });
  }, [params.id]);

  const onSubmit = (data: any) => {
    update(ref(realDB, "datas/" + params.id), {
      ...data,
      items,
      type,
      id,
    }).then(() => {
      toast.success("The invoice updated succesfully");
      closeModal();
    });
  };

  const equalValue = () => {
    for (let el in inputKeys) {
      if (
        inputKeys[el] !== "type" &&
        inputKeys[el] !== "invoiceDate" &&
        inputKeys[el] !== "id" &&
        inputKeys[el] !== "items"
      ) {
        setValue(inputKeys[el], data[el]);
      } else if (inputKeys[el] === "id") {
        setId(data[el]);
      }
    }
  };

  useEffect(() => {
    equalValue();
  }, [data]);

  return (
    <>
      <Toaster richColors position="top-right" />
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        id="edit"
        className={
          "mt-0 absolute top-20 min-w-full pb-5 md:min-w-[616px] left-0 mx-0 md:max-w-[666px] min-h-[calc(100dvh-80px)] pt-[33px] lg:h-full lg:max-h-full lg:top-0 z-50 px-6 lg:pl-[110px] lg:z-0 bg-white lg:pt-0 lg:min-h-[100dvh] dark:bg-dark delete__modal mb-0 h-auto overflow-auto lg:max-w-[830px] md:max-h-[calc(100dvh-80px)] " +
          (show ? "translate-x-0" : "-translate-x-full")
        }
      >
        <span
          className="flex md:hidden gap-3 items-center cursor-pointer md:mb-12 mb-8 lg:hover:text-gray dark:text-white text-black transition-all"
          onClick={() => closeModal()}
        >
          <img src="/arrow-icon.svg" className="rotate-180 w-2" />
          <span className="font-bold">Go back</span>
        </span>
        <form
          onSubmit={handleSubmit(onSubmit, (data) => {
            console.log("error", data);
          })}
        >
          <TitleInvoice id={id} />
          <div className="pb-[88px]">
            <SectionName>Bill From</SectionName>
            <FromSection form={register} />
            <SectionName>Bill to</SectionName>
            <ToSection form={register} date={data[12]} />
            <ItemList items={items} setItems={setItems} />
          </div>
          <div className="relative flex justify-end gap-2">
            <CancelBtn onClick={() => closeModal()} />
            <Button type="mark" isSubmit={true} text="Save Changes" />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditModal;
