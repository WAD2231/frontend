import { OrdersTable } from "@/components/OrderTable";
function Order() {
  return (
    <div className="p-6 space-y-6 bg-background min-h-screen w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Orders</h1>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Orders</span>
            <span>/</span>
            <span>Orders List</span>
          </div>
        </div>
      </div>
      <OrdersTable />
    </div>
  );
}

export default Order;
