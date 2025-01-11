"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Filter,
  Download,
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import routes from "@/config/routes";

const customers = [
  {
    id: 1,
    name: "John Bushmill",
    email: "johnb@gmail.com",
    phone: "078 5054 8877",
    orders: "124",
    balance: "$121.00",
    status: "Blocked",
    created: "29 Dec 2022",
  },
  {
    id: 2,
    name: "Laura Prichet",
    email: "laura.prichet@mail.com",
    phone: "215 302 3376",
    orders: "45",
    balance: "$590.00",
    status: "Active",
    created: "24 Dec 2022",
  },
  {
    id: 3,
    name: "Mohammad Karim",
    email: "m_karim@mail.com",
    phone: "050 414 8778",
    orders: "884",
    balance: "$125.00",
    status: "Blocked",
    created: "12 Dec 2022",
  },
  {
    id: 4,
    name: "Josh Bill",
    email: "josh.bill@mail.com",
    phone: "216 75 612 706",
    orders: "99",
    balance: "$348.00",
    status: "Blocked",
    created: "21 Oct 2022",
  },
  {
    id: 5,
    name: "Josh Adam",
    email: "josh.adam@mail.com",
    phone: "02 75 150 655",
    orders: "1,340",
    balance: "$607.00",
    status: "Active",
    created: "21 Oct 2022",
  },
  {
    id: 6,
    name: "Sin Tae",
    email: "sin_tae@mail.com",
    phone: "078 6013 3854",
    orders: "431",
    balance: "$234.00",
    status: "Active",
    created: "21 Oct 2022",
  },
  {
    id: 7,
    name: "Rajesh Masvidal",
    email: "rajesh_m@mail.com",
    phone: "828 216 2190",
    orders: "36",
    balance: "$760.00",
    status: "Blocked",
    created: "19 Sep 2022",
  },
  {
    id: 8,
    name: "Fajar Surya",
    email: "surya@mail.com",
    phone: "078 7173 9261",
    orders: "77",
    balance: "$400.00",
    status: "Active",
    created: "19 Sep 2022",
  },
  {
    id: 9,
    name: "Lisa Greg",
    email: "lisa@mail.com",
    phone: "077 6157 4248",
    orders: "89",
    balance: "$812.00",
    status: "Active",
    created: "19 Sep 2022",
  },
  {
    id: 10,
    name: "Linda Blair",
    email: "lindablair@mail.com",
    phone: "050 414 8778",
    orders: "1,296",
    balance: "$723.00",
    status: "Active",
    created: "10 Aug 2022",
  },
];

import { useSearchParams } from "react-router-dom";
import { getAllUsers } from "@/services/userServices";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import formatDate from "@/lib/formatDate";

export default function Customer() {
  const [paging, setPaging] = useState({
    totalPages: 0,
    pageSize: 50,
    totalItems: 0,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const [users, setUsers] = useState([]);

  const currentPage = parseInt(searchParams.get("page")) || 1;

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const debounceSearchValue = useDebounce(search, 500);

  useEffect(() => {
    const fetchUsers = async ({ currentPage, pageSize, search }) => {
      console.log(currentPage, pageSize, search);
      
      const response = await getAllUsers({ page: currentPage, size: pageSize, search });
      if (response.status === 200) {
        setUsers(response.data.users);
        setPaging({
          totalPages: response.data.paging.total_page,
          pageSize: response.data.paging.page_size,
          totalItems: response.data.paging.total_item,
        });
      }
    };
    fetchUsers({
      currentPage,
      pageSize: paging.pageSize,
      search: debounceSearchValue,
    });
  }, [currentPage, debounceSearchValue]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("search", value);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Customer</h1>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Dashboard</span>
            <span>/</span>
            <span>Customer List</span>
          </div>
        </div>
        {/* <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>+ Add Customer</Button>
        </div> */}
      </div>

      <div className="rounded-lg border bg-card">
        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between p-4 border-b">
          <div className="relative w-full md:w-80">
            <Input
              placeholder="Search customer..."
              className="pl-4"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <input type="checkbox" className="rounded border-input" />
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Customer Name
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Orders
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Balance
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Status
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Created
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell>
                  <input type="checkbox" className="rounded border-input" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img src={user.avatar} alt="avatar" className="w-8 h-8" />
                    <div>
                      <div className="font-medium">{user.fullname}</div>
                      <div className="text-sm text-muted-foreground">
                        {user.username}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.orders}</TableCell>
                <TableCell>{user.balance}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      user.status === "Active"
                        ? "border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900 dark:text-green-300"
                        : "border-red-200 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900 dark:text-red-300"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{`${formatDate(user.created_at)}`}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Link to={`${routes.customerDetail}/${user.user_id}`}>
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
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
                (currentPage - 1) * paging.pageSize + users.length
              } from ${paging.totalItems} users`}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setSearchParams({ page: currentPage - 1 })}
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
                      setSearchParams({ page: page + 1 });
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
                onClick={() => setSearchParams({ page: currentPage + 1 })}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
