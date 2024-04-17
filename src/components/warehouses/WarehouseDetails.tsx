import { FC } from "react";
import { format } from "date-fns";
import { useWarehouseStockMovements } from "../../hooks/stockMovements";
import { useTranslation } from "react-i18next";

interface Props {
  warehouseId: string;
  capacity: number;
}

const WarehouseDetails: FC<Props> = ({ warehouseId, capacity }) => {
  const { t } = useTranslation();
  const { freeSpace, currentStock, stockMovements } =
    useWarehouseStockMovements(warehouseId, capacity);

  return (
    <div className="flex flex-col gap-2 bg-gray-800 rounded-md p-4 border border-gray-400 w-full">
      <h3 className="font-semibold text-2xl">
        {t("current_stock")}: {currentStock}
      </h3>
      <h3 className="font-semibold text-2xl mb-4">
        {t("free_space_remaining")}: {freeSpace}
      </h3>
      {stockMovements.length > 0 && (
        <>
          <h4 className="font-semibold text-2xl mb-2">
            {t("stock_movements")}:
          </h4>
          <ul className="gap-4 flex flex-col max-h-64 overflow-scroll">
            {stockMovements.map((sm) => (
              <li
                className="bg-gray-600 text-white capitalize p-2 rounded-md border border-gray-50"
                key={sm.id}
              >
                <p>
                  {`${t("type_of_movement")}: `}
                  <span className="font-bold">{sm.type}</span>
                </p>

                <p>
                  {`${t("product")}: `}
                  <span className="font-bold">{sm.product.name}</span>
                </p>

                <p>
                  {`${t("quantity")}: `}
                  <span className="font-bold">{sm.quantity}</span>
                </p>

                <p>
                  {`${t("date")}: `}
                  <span className="font-bold">
                    {format(sm.date, "yyyy-MM-dd")}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default WarehouseDetails;
