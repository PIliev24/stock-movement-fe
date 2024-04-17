import { useTranslation } from "react-i18next";
import PageTitle from "../../components/common/PageTitle";
import { PATHS } from "../../data/constants";
import { useState } from "react";
import WarehouseDetails from "../../components/warehouses/WarehouseDetails";
import WarehouseSelector from "../../components/warehouses/WarehouseSelector";
import StockMovementForm from "../../components/forms/StockMovementForm";

const Warehouses = () => {
  const { t } = useTranslation();

  const [selectedWarehouseId, setSelectedWarehouseId] = useState<string>("");
  const [capacity, setCapacity] = useState<number>(0);

  const onSelect = (id: string, capacity: number) => {
    setSelectedWarehouseId(id);
    setCapacity(capacity);
  };

  return (
    <>
      <PageTitle
        title={t("warehouses")}
        navigateTo={PATHS.root}
        btnText={t("products")}
      />
      <div className="mb-6">
        <WarehouseSelector onSelect={onSelect} />
      </div>
      {selectedWarehouseId && (
        <div className="flex gap-8 md:gap-4 items-start justify-between flex-col sm:flex-row">
          <WarehouseDetails
            capacity={capacity}
            warehouseId={selectedWarehouseId}
          />
          <StockMovementForm warehouseId={selectedWarehouseId} />
        </div>
      )}
    </>
  );
};

export default Warehouses;
