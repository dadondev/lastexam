import Input from "./Input";
import Label from "./Label";

const FromSection = ({ form }: { form: (a: string, b: object) => any }) => {
  return (
    <div className="grid gap-6 max-w-full mb-10 lg:mb-12">
      <div className="grid">
        <Label>Street Address</Label>
        <Input form={form} name="address" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[4fr_2fr]">
        <div className="grid grid-cols-[1fr_1fr] gap-6 justify-between max-w-full w-full">
          <div className="grid">
            <Label>City</Label>
            <Input form={form} name="city" />
          </div>
          <div className="grid">
            <Label>Post Code</Label>
            <Input form={form} name="code" />
          </div>
        </div>
        <div className="grid">
          <Label>Country</Label>
          <Input form={form} name="country" />
        </div>
      </div>
    </div>
  );
};

export default FromSection;
