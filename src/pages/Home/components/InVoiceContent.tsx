import Title from "../../../general/components/Title";

const InVoiceContent = ({ inVoices }: { inVoices: number }) => {
  return (
    <article>
      <Title>Invoices</Title>
      <p className="dark:text-lightGray text-sm transition text-gray">
        <span
          className={"hidden md:inline" + (inVoices === 0 ? "md:hidden" : "")}
        >
          There are
        </span>
        {inVoices > 0 ? " " + inVoices + " " : "No "}
        <span className={"hidden" + (inVoices > 0 ? " md:inline" : "")}>
          total{" "}
        </span>
        <span className={"md:inline" + (inVoices === 0 ? "inline" : "hidden")}>
          {inVoices !== 1 ? " invoices" : " invoice"}
        </span>
      </p>
    </article>
  );
};

export default InVoiceContent;
