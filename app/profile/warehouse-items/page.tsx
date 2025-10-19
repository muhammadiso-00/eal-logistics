"use client";

import Button from "@/components/atoms/button";
import Line from "@/components/atoms/line";
import OrderCard from "@/components/molecules/orderCard";
import { MockOrders } from "@/lib/data";

export default function WarehouseItems() {
    function handleCopy() {
        const allOrderIds = MockOrders.map(order => order.orderId).join(",");

        navigator.clipboard.writeText(allOrderIds)
            .then(() => {
                console.log("Copied:", allOrderIds);
                alert("Все ID заказов скопированы!");
            })
            .catch(err => {
                console.error("Ошибка при копировании:", err);
            });
    }


    return (
        <div className="space-y-4 flex flex-col">
            <h1 className="text-5xl">
                Товары на складе <Line />
            </h1>
            <div className="flex flex-col gap-4 ">
                {MockOrders.map((item) => (
                    <OrderCard
                        key={item.id}
                        orderId={item.orderId}
                        normal={true}
                        status="На складе"
                    />
                ))}
            </div>
            <Button title="Скопировать все" className="self-end" onClick={handleCopy} />
        </div>
    );
}
