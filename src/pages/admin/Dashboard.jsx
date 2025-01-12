import { OrdersTable } from "@/components/OrderTable";
import PieChart from "@/components/PieChart";
import {
  getCategoryStatistic,
  getManufacturerStatistic,
  getBestSellingProductStatistic,
  getTopCustomerStatistic,
  getRevenueStatistic,
  getNewCustomerStatistic,
} from "@/services/statisticServices";
import { useEffect, useState } from "react";
import BarChartHorizontal from "@/components/BartChartHorizontal";
import BartChar from "@/components/BartChart";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Filter, Eye, Link2, ChevronDown } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import routes from "@/config/routes";
import { getAllOrders } from "@/services/orderServices";
import formatDate from "@/lib/formatDate";
import capitalFirstLetter from "@/lib/capitalFirstLetter";

const orders = [
  {
    id: "#302012",
    product: "Handmade Pouch",
    additionalProducts: "+3 other products",
    date: "1 min ago",
    customer: {
      name: "John Bushmill",
      email: "johnb@mail.com",
    },
    total: "$121.00",
    payment: "Mastercard",
    status: "Processing",
  },
  {
    id: "#302011",
    product: "Smartwatch E2",
    additionalProducts: "+1 other products",
    date: "1 min ago",
    customer: {
      name: "Ilham Budi A",
      email: "ilhambudi@mail.com",
    },
    total: "$590.00",
    payment: "Visa",
    status: "Processing",
  },
  {
    id: "#302002",
    product: "Smartwatch E1",
    date: "5 hour ago",
    customer: {
      name: "Mohammad Karim",
      email: "m_karim@mail.com",
    },
    total: "$125.00",
    payment: "Transfer",
    status: "Shipped",
  },
  {
    id: "#301901",
    product: "Headphone G1 Pro",
    additionalProducts: "+1 other products",
    date: "1 day ago",
    customer: {
      name: "Linda Blair",
      email: "lindablair@mail.com",
    },
    total: "$348.00",
    payment: "Paypal",
    status: "Shipped",
  },
  {
    id: "#301900",
    product: "Iphone X",
    date: "2 day ago",
    customer: {
      name: "Josh Adam",
      email: "josh.adam@mail.com",
    },
    total: "$607.00",
    payment: "Visa",
    status: "Delivered",
  },
  {
    id: "#301881",
    product: "Puma Shoes",
    additionalProducts: "+1 other products",
    date: "5 Jan 2023",
    customer: {
      name: "Sin Tae",
      email: "sin_tae@mail.com",
    },
    total: "$234.00",
    payment: "Visa",
    status: "Cancelled",
  },
  {
    id: "#301643",
    product: "Imac 2021",
    date: "1 Jan 2023",
    customer: {
      name: "Rajesh Masvidal",
      email: "rajesh_m@mail.com",
    },
    total: "$760.00",
    payment: "Transfer",
    status: "Shipped",
  },
  {
    id: "#301600",
    product: "Nike Shoes",
    additionalProducts: "+1 other products",
    date: "24 Dec 2022",
    customer: {
      name: "Fajar Surya",
      email: "surya@mail.com",
    },
    total: "$400.00",
    payment: "Mastercard",
    status: "Delivered",
  },
  {
    id: "#301555",
    product: "Lego Car",
    additionalProducts: "+4 other products",
    date: "2 Dec 2022",
    customer: {
      name: "Francis Greg",
      email: "francisg@mail.com",
    },
    total: "$812.00",
    payment: "Paypal",
    status: "Delivered",
  },
  {
    id: "#301002",
    product: "Skincare Alia 1",
    additionalProducts: "+1 other products",
    date: "2 Dec 2022",
    customer: {
      name: "Linda Blair",
      email: "lindablair@mail.com",
    },
    total: "$123.00",
    payment: "Paypal",
    status: "Delivered",
  },
];

export default function DashboardPage() {
  const [categoryStatistics, setCategoryStatistics] = useState([]);
  const [manufacturerStatistics, setManufacturerStatistics] = useState([]);
  const [bestSellingProductStatistics, setBestSellingProductStatistics] =
    useState([]);
  const [topCustomerStatistics, setTopCustomerStatistics] = useState([]);
  const [revenueStatistics, setRevenueStatistics] = useState([]);
  const [newCustomerStatistics, setNewCustomerStatistics] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [orders, setOrders] = useState([]);

  const [paging, setPaging] = useState({
    totalPages: 0,
    totalItems: 0,
    pageSize: 70,
  });

  const currentPage = parseInt(searchParams.get("page")) || 1;

  const sort = searchParams.get("sort") || "date_asc";
  const status = searchParams.get("status") || "";

  useEffect(() => {
    const fetchData = async () => {
      const [
        categoryStatisticData,
        manufacturerStatisticData,
        bestSellingProductStatisticData,
        topCustomerStatisticData,
        revenueStatisticData,
        newCustomerStatisticData,
        ordersData,
      ] = await Promise.all([
        getCategoryStatistic(),
        getManufacturerStatistic(),
        getBestSellingProductStatistic(10),
        getTopCustomerStatistic(10),
        getRevenueStatistic(),
        getNewCustomerStatistic(),
        getAllOrders(sort, status, currentPage, paging.pageSize),
      ]);
      if (categoryStatisticData.status === 200) {
        setCategoryStatistics(categoryStatisticData.data);
      }
      if (manufacturerStatisticData.status === 200) {
        setManufacturerStatistics(manufacturerStatisticData.data);
      }
      if (bestSellingProductStatisticData.status === 200) {
        setBestSellingProductStatistics(bestSellingProductStatisticData.data);
      }
      if (topCustomerStatisticData.status === 200) {
        console.log(topCustomerStatisticData.data);
        setTopCustomerStatistics(topCustomerStatisticData.data);
      }
      if (revenueStatisticData.status === 200) {
        setRevenueStatistics(revenueStatisticData.data);
      }
      if (newCustomerStatisticData.status === 200) {
        setNewCustomerStatistics(newCustomerStatisticData.data);
      }
      if (ordersData.status === 200) {
        setOrders(ordersData.data.orders);
        setPaging({
          totalPages: ordersData.data.paging.total_page,
          totalItems: ordersData.data.paging.total_item,
          pageSize: ordersData.data.paging.page_size,
        });
      }
    };
    fetchData();
  }, [currentPage, sort, status]);

  const handleSortId = () => {
    let sort = searchParams.get("sort");
    if (sort === "id_desc") {
      sort = "id_asc";
    } else {
      sort = "id_desc";
    }
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);
    setSearchParams(params);
  };

  const handleSortTotal = () => {
    let sort = searchParams.get("sort");
    if (sort === "total_desc") {
      sort = "total_asc";
    } else {
      sort = "total_desc";
    }
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);
    setSearchParams(params);
  };

  const handleSortDate = () => {
    let sort = searchParams.get("sort");
    if (sort === "date_desc") {
      sort = "date_asc";
    } else {
      sort = "date_desc";
    }
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);
    setSearchParams(params);
  };

  return (
    <div className="p-1 space-y-6 bg-background min-h-screen w-full">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <BartChar
          dataKey={"Quantity"}
          chartData={newCustomerStatistics?.map((item) => {
            return {
              Quantity: item.quantity,
              month: item.month,
              year: item.year,
              monthYear: `${item.month}/${item.year}`,
            };
          })}
          label={"New customer statistics"}
        />
        <BartChar
          dataKey={"Revenue"}
          chartData={revenueStatistics?.map((item) => {
            return {
              Revenue: (item.revenue > 1000
                ? item.revenue / 1000
                : item.revenue
              ).toFixed(0),
              month: item.month,
              year: item.year,
              monthYear: `${item.month}/${item.year}`,
            };
          })}
          label={"Sales Data: January - June 2024"}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChartHorizontal
          dataKey={{
            label: "name",
            key: "Quantity",
          }}
          chartData={bestSellingProductStatistics?.map((item) => {
            return {
              name: item.name,
              Quantity: item.quantity,
            };
          })}
          label={"Top best-selling products"}
        />
        <BarChartHorizontal
          dataKey={{
            label: "fullname",
            key: "Total",
          }}
          chartData={topCustomerStatistics?.map((item) => {
            return {
              fullname: item.fullname,
              Total: item.total,
            };
          })}
          label={"Top customers"}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PieChart
          label={"Statistic product quantity by category"}
          chartData={categoryStatistics}
        />

        <PieChart
          label={"Statistic product quantity by manufacturer"}
          chartData={manufacturerStatistics}
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary dark:bg-primary/20"
            >
              +2 Orders
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground">
              See More
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <input type="checkbox" className="rounded border-input" />
                </TableHead>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Order ID</span>
                    {sort === "id_desc" ? (
                      <ChevronDown className="h-4 w-4" onClick={handleSortId} />
                    ) : (
                      <ChevronDown
                        className="h-4 w-4 transform rotate-180"
                        onClick={handleSortId}
                      />
                    )}
                  </div>
                </TableHead>
                <TableHead>Product</TableHead>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Date</span>
                    {sort === "date_desc" ? (
                      <ChevronDown
                        className="h-4 w-4"
                        onClick={handleSortDate}
                      />
                    ) : (
                      <ChevronDown
                        className="h-4 w-4 transform rotate-180"
                        onClick={handleSortDate}
                      />
                    )}
                  </div>
                </TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Total</span>
                    {sort === "total_desc" ? (
                      <ChevronDown
                        className="h-4 w-4"
                        onClick={handleSortTotal}
                      />
                    ) : (
                      <ChevronDown
                        className="h-4 w-4 transform rotate-180"
                        onClick={handleSortTotal}
                      />
                    )}
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders?.map((order) => (
                <TableRow key={order?.order_id}>
                  <TableCell>
                    <input type="checkbox" className="rounded border-input" />
                  </TableCell>
                  <TableCell className="font-medium">
                    {order?.order_id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={order?.details[0]?.product?.images[0]}
                        alt={order?.details[0]?.id}
                        className="w-12 h-12 rounded-lg"
                      />
                      <div>
                        <div className="font-medium">
                          {order?.details[0]?.product?.name}
                        </div>
                        {order?.details.length > 1 && (
                          <div className="text-sm text-muted-foreground">
                            + {order?.details.length - 1} other items
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{formatDate(order?.order_date)}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order?.user?.fullname}</div>
                      <div className="text-sm text-muted-foreground">
                        {order?.user?.username}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>${order.total}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        order.status === "pending"
                          ? "border-orange-200 bg-orange-100 text-orange-700 dark:border-orange-800 dark:bg-orange-900 dark:text-orange-300"
                          : order.status === "completed"
                          ? "border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900 dark:text-green-300"
                          : "border-red-200 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900 dark:text-red-300"
                      }
                    >
                      {capitalFirstLetter(order?.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Link to={`${routes.orderDetail}/${order.order_id}`}>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon">
                        <Link2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {paging.totalPages > 1 && (
            <div className="p-4 border-t border-border flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {`Showing ${(currentPage - 1) * paging.pageSize + 1}-${
                  (currentPage - 1) * paging.pageSize + orders.length
                } from ${paging.totalItems} orders`}
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => {
                    const prams = new URLSearchParams(searchParams);
                    prams.set("page", currentPage - 1);
                    setSearchParams(prams);
                  }}
                >
                  Previous
                </Button>
                {[...Array(paging.totalPages).keys()].map((page) => {
                  return (
                    <Button
                      key={page}
                      variant="outline"
                      size="sm"
                      className={
                        currentPage === page + 1
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }
                      onClick={() => {
                        const prams = new URLSearchParams(searchParams);
                        prams.set("page", page + 1);
                        setSearchParams(prams);
                      }}
                    >
                      {page + 1}
                    </Button>
                  );
                })}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === paging.totalPages}
                  onClick={() => {
                    const prams = new URLSearchParams(searchParams);
                    prams.set("page", currentPage + 1);
                    setSearchParams(prams);
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
