import { OrdersTable } from "@/components/OrderTable";
import { SalesDashboard } from "@/components/SalesDashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import routes from "@/config/routes";
import { Calendar, ShoppingCart, Package, Wallet } from "lucide-react";
import PieChart from "@/components/PieChart";
import { Link } from "react-router-dom";
import {
  getCategoryStatistic,
  getManufacturerStatistic,
  getBestSellingProductStatistic,
  getTopCustomerStatistic,
  getRevenueStatistic,
  getNewCustomerStatistic,
} from "@/services/statisticServices";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import BarChartHorizontal from "@/components/BartChartHorizontal";
import BartChar from "@/components/BartChart";

const data = [
  { name: "Jan", revenue: 800, sales: 400 },
  { name: "Feb", revenue: 600, sales: 500 },
  { name: "Mar", revenue: 800, sales: 700 },
  { name: "Apr", revenue: 1000, sales: 800 },
  { name: "May", revenue: 900, sales: 600 },
  { name: "Jun", revenue: 1100, sales: 800 },
  { name: "Jul", revenue: 1200, sales: 900 },
  { name: "Aug", revenue: 1000, sales: 1100 },
  { name: "Sep", revenue: 1400, sales: 1000 },
  { name: "Oct", revenue: 1200, sales: 800 },
  { name: "Nov", revenue: 1100, sales: 900 },
  { name: "Dec", revenue: 1300, sales: 1000 },
];

export default function DashboardPage() {
  const [categoryStatistics, setCategoryStatistics] = useState([]);
  const [manufacturerStatistics, setManufacturerStatistics] = useState([]);
  const [bestSellingProductStatistics, setBestSellingProductStatistics] =
    useState([]);
  const [topCustomerStatistics, setTopCustomerStatistics] = useState([]);
  const [revenueStatistics, setRevenueStatistics] = useState([]);
  const [newCustomerStatistics, setNewCustomerStatistics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [
        categoryStatisticData,
        manufacturerStatisticData,
        bestSellingProductStatisticData,
        topCustomerStatisticData,
        revenueStatisticData,
        newCustomerStatisticData,
      ] = await Promise.all([
        getCategoryStatistic(),
        getManufacturerStatistic(),
        getBestSellingProductStatistic(10),
        getTopCustomerStatistic(10),
        getRevenueStatistic(),
        getNewCustomerStatistic(),
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
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen w-full">
      {/* <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button variant="default">All Time</Button>
          <Button variant="outline">12 Months</Button>
          <Button variant="outline">30 Days</Button>
          <Button variant="outline">7 Days</Button>
          <Button variant="outline">24 Hour</Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Select Dates
          </Button>
          <Link to={routes.addProduct}>
            <Button>+ Add Product</Button>
          </Link>
        </div>
      </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Revenue
                </p>
                <h3 className="text-2xl font-bold">$75,500</h3>
                <p className="text-sm text-green-600 dark:text-green-400">
                  +10%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Sales
                </p>
                <h3 className="text-2xl font-bold">31,500</h3>
                <p className="text-sm text-green-600 dark:text-green-400">
                  +15%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Product SKU
                </p>
                <h3 className="text-2xl font-bold">247</h3>
                <p className="text-sm text-muted-foreground">0%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                <Wallet className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Balance
                </p>
                <h3 className="text-2xl font-bold">$24,500</h3>
                <p className="text-sm text-red-600 dark:text-red-400">-25%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BartChar
          dataKey={"sales"}
          chartData={[
            {
              month: 1,
              year: 2024,
              sales: 100000,
            },
            {
              month: 12,
              year: 2024,
              sales: 200000,
              monthYear: "12/2024",
            },
            {
              month: 1,
              year: 2025,
              sales: 100000,
              monthYear: "1/2025",
            },
            {
              month: 2,
              year: 2025,
              sales: 80000,
              monthYear: "2/2025",
            },
            {
              month: 3,
              year: 2025,
              sales: 70000,
              monthYear: "3/2025",
            },
            {
              month: 4,
              year: 2025,
              sales: 60000,
              monthYear: "4/2025",
            },
            {
              month: 5,
              year: 2025,
              sales: 50000,
              monthYear: "5/2025",
            },
            {
              month: 6,
              year: 2025,
              sales: 40000,
              monthYear: "6/2025",
            },
            {
              month: 7,
              year: 2025,
              sales: 30000,
              monthYear: "7/2025",
            },
            {
              month: 8,
              year: 2025,
              sales: 20000,
              monthYear: "8/2025",
            },
            {
              month: 9,
              year: 2025,
              sales: 10000,
              monthYear: "9/2025",
            },
            {
              month: 11,
              year: 2025,
              sales: 2000,
              monthYear: "11/2025",
            },
          ]}
          label={"Sales Data: January - June 2024"}
        />
        <BartChar
          dataKey={"quantity"}
          chartData={newCustomerStatistics?.map((item) => ({
            ...item,
            monthYear: `${item.month}/${item.year}`,
          }))}
          label={"New customer statistics"}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">Sales Progress</h3>
                <p className="text-sm text-muted-foreground">This Quarter</p>
              </div>
              <Button variant="ghost" size="icon">
                ⋮
              </Button>
            </div>
            <div className="mt-6 relative flex items-center justify-center">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  className="text-primary"
                  strokeDasharray={351.8583}
                  strokeDashoffset={351.8583 * (1 - 0.7555)}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-bold">75.55%</span>
                <span className="text-sm text-green-600 dark:text-green-400">
                  +10%
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Target
                </p>
                <p className="text-lg font-semibold text-red-600 dark:text-red-400">
                  $20k ↓
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Revenue
                </p>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                  $16k ↑
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Today
                </p>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                  $1.5k ↑
                </p>
              </div>
            </div>
          </CardContent>
        </Card> */}

        <BarChartHorizontal
          dataKey={"quantity"}
          chartData={
            bestSellingProductStatistics.length > 0
              ? bestSellingProductStatistics
              : [
                  {
                    id: 5,
                    name: "Date",
                    quantity: 4,
                  },
                  {
                    id: 3,
                    name: "Banana",
                    quantity: 3,
                  },
                  {
                    id: 4,
                    name: "Cherry",
                    quantity: 2,
                  },
                  {
                    id: 2,
                    name: "Apple",
                    quantity: 2,
                  },
                  {
                    id: 1,
                    name: "Product 1",
                    quantity: 1,
                  },
                ]
          }
          label={"Top best-selling products"}
        />
        <BarChartHorizontal
          dataKey={"total"}
          chartData={
            topCustomerStatistics.length > 0
              ? topCustomerStatistics
              : [
                  {
                    id: 8,
                    name: "Nguyễn Khánh Du",
                    total: 200000,
                  },
                  {
                    id: 7,
                    name: "Bùi Công Anh",
                    total: 100000,
                  },
                  {
                    id: 6,
                    name: "Nguyễn Văn A",
                    total: 80000,
                  },
                  {
                    id: 5,
                    name: "Nguyễn Văn B",
                    total: 70000,
                  },
                  {
                    id: 4,
                    name: "Nguyễn Văn C",
                    total: 60000,
                  },
                  {
                    id: 3,
                    name: "Nguyễn Văn D",
                    total: 50000,
                  },
                ]
          }
          label={"Top customers"}
        />

        {/* <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">Statistics</h3>
                <p className="text-sm text-muted-foreground">
                  Revenue and Sales
                </p>
              </div>
              <Button variant="ghost" size="icon">
                ⋮
              </Button>
            </div>
            <div className="mt-6 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#166534"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#FB923C"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card> */}
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
      <OrdersTable />
    </div>
  );
}
