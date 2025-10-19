import Line from "@/components/atoms/line";
import OrderCard from "@/components/molecules/orderCard";
import { MockOrders } from "@/lib/data";

export default function OrderHistory(){
    return(
        <div className="">
            <h1 className="text-5xl ">История заказов <Line/></h1>
            <div className="flex flex-col gap-4 mt-4">
                {
                    MockOrders.map(order=>{
                        return(
                            <OrderCard orderId={order.orderId} price={order.price} quantity={order.quantity} key={order.id} status="Доставлен" />
                        )
                    })
                }
            </div>
        </div>
    )
}