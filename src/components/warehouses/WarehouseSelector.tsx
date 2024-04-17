import { FC } from "react";
import { useWarehouses } from "../../hooks/warehouses";
import { useTranslation } from "react-i18next";

interface Props {
  onSelect: (id: string, capacity: number) => void;
}

const WarehouseSelector: FC<Props> = ({ onSelect }) => {
  const { t } = useTranslation();
  const warehouses = useWarehouses();

  return (
    <select
      onChange={(e) => {
        const [id, capacity] = e.target.value.split(" ");
        onSelect(id, +capacity);
      }}
      defaultValue={""}
      className="p-2 rounded bg-gray-400 text-lg"
    >
      <option value="" disabled>
        {t("select_warehouse")}
      </option>
      {warehouses.map((warehouse) => (
        <option
          key={warehouse.id}
          value={`${warehouse.id} ${warehouse.capacity}`}
        >
          {warehouse.name}
        </option>
      ))}
    </select>
  );
};

export default WarehouseSelector;
