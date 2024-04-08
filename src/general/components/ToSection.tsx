import { useEffect } from "react";
import Input from "./Input";
import Label from "./Label";

const ToSection = ({
  form,
  date,
}: {
  form: (a: string, b: object) => any;
  date?: string;
}) => {
  useEffect(() => {}, []);

  return (
    <div className="grid gap-6 max-w-full mb-10">
      <div className="grid">
        <Label>Client’s Name</Label>
        <Input form={form} name="clientName" />
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-6 justify-between max-w-full w-full md:grid-cols-1">
        <div className="grid">
          <Label>Client’s Email</Label>
          <Input form={form} name="email" type="clientEmail" />
        </div>
        <div className="grid">
          <Label>Street Address</Label>
          <Input form={form} name="clientAddress" />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="grid">
          <Label>City</Label>
          <Input form={form} name="clientCity" />
        </div>
        <div className="grid">
          <Label>Post Code</Label>
          <Input form={form} name="clientCode" />
        </div>
        <div className="grid">
          <Label>Country</Label>
          <Input form={form} name="clientCountry" />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid opacity-70">
          <Label>Invoice date</Label>
          <input
            type="date"
            value={date}
            disabled
            className="border bg-transparent border-lightGray dark:border-lightBlue rounded-lg py-[18px] px-5 block focus:border-purpleLight outline-none dark:bg-darkBlue dark:text-white  w-full"
          />
        </div>
        <div className="grid">
          <Label disabled>Payment Terms</Label>
          <select
            {...form("paymentTerms", { required: true })}
            id="select"
            className="
        border bg-transparent border-lightGray rounded-lg py-[18px] px-5 block focus:border-purpleLight outline-none dark:border-lightBlue dark:bg-darkBlue dark:text-white  w-full"
          >
            <option value="1day">Net 1 days</option>
            <option value="7days">Net 7 days</option>
            <option value="15days">Net 15 days</option>
            <option value="30days">Net 30 days</option>
          </select>
        </div>
      </div>
      <div className="grid">
        <Label>Project / Description</Label>
        <Input form={form} name="project" />
      </div>
    </div>
  );
};

export default ToSection;
