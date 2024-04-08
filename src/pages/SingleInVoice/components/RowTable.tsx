import ColTable from "./ColTable";

const RowTable = ({
  name,
  count,
  price,
}: {
  name: string;
  count: number;
  price: number;
}) => {
  return (
    <tr className="grid grid-cols-[45%_1fr_1fr_1fr]">
      <ColTable type="left">{name}</ColTable>
      <ColTable type="right">{count}</ColTable>
      <ColTable type="right">£ {price}</ColTable>
      <ColTable type="right">£ {count * price}</ColTable>
    </tr>
  );
};

export default RowTable;
