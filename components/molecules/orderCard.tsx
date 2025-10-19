interface OrderCardProps {
  orderId: string;
  quantity?: number;
  orderDate?: string;
  price?: number;
  status?: "Доставлен" | "В ожидании" | "На складе";
  className?: string;
  normal?: boolean;
}

export default function OrderCard({
  orderId,
  quantity,
  orderDate,
  price,
  status,
  className = "",
  normal = false,
}: OrderCardProps) {
  return (
    <div
      className={`${className} bg-[#CAE2E6] flex justify-between items-center p-6 w-full rounded-3xl`}
    >
      {normal == false ? (
        <>
          <div className="space-y-2">
            <h1 className="text-[#393535] font-sans font-semibold text-2xl">
              {orderId}
            </h1>
            <div className="text-xs text-[#393535] font-sans">
              <span>{quantity} продукта</span> • <span>{orderDate}</span>
            </div>
          </div>

          {status === "Доставлен" ? (
            <div className="text-right">
              <div className="bg-[#00FCF2] text-xs py-1 px-3.5 rounded-full mb-1">
                {status}
              </div>
              <h2 className="text-[#393535] font-sans font-semibold text-2xl">
                ${price}
              </h2>
            </div>
          ) : (
            <div>
              <h2 className="text-[#393535] font-sans font-semibold text-2xl">
                ${price}
              </h2>
            </div>
          )}
        </>
      ) : (
        <>
          <div>
            <h1 className="text-xl font-semibold">{orderId}</h1>
          </div>
          <div>
            <span
              className={`py-1 px-3.5 rounded-full ${
                status === "В ожидании" ? "bg-red-500" : "bg-[#00FCF2]"
              }`}
            >
              {status}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
