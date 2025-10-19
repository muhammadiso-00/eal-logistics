import Line from "@/components/atoms/line";
import OrderCard from "@/components/molecules/orderCard";
import { MockOrders } from "@/lib/data";

export default function ActiveOrders() {
    return (
        <div className="w-full"> {/* Add w-full here */}
           
            <div className=" w-full"> {/* Add w-full here too */}
                <h1 className="text-5xl">Активные заказы <Line/></h1>
                <div className="w-full flex flex-col gap-4 mt-4"> {/* Add gap and margin */}
                    {
                        MockOrders.map(order => {
                            return (
                                <OrderCard 
                                    orderId={order.orderId} 
                                    price={order.price} 
                                    quantity={order.quantity} 
                                    orderDate={order.date} 
                                    key={order.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}