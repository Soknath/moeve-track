import { useState } from "react";
import {
  BadgeDelta,
  Card,
  DeltaType,
  Dropdown,
  DropdownItem,
  Flex,
  MultiSelectBox,
  MultiSelectBoxItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

export type SalesPerson = {
  name: string,
  leads: number,
  sales: string,
  quota: string,
  variance: string,
  region: string,
  status: string,
  deltaType: DeltaType,
};

export const salesPeople = [
  {
    name: "Peter Doe",
    leads: 45,
    deltaType: "up",
  },
  {
    name: "Lena Whitehouse",
    leads: 35,
    deltaType: "unchanged",
  },
  {
    name: "Phil Less",
    leads: 52,
    deltaType: "down",
  },
  {
    name: "John Camper",
    leads: 22,
    deltaType: "up",
  },
  {
    name: "Max Balmoore",
    leads: 49,
    deltaType: "up",
  },
  {
    name: "Peter Moore",
    leads: 82,
    deltaType: "unchanged",
  },
  {
    name: "Joe Sachs",
    leads: 49,
    deltaType: "up",
  },
];

export default function TableView() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedNames, setSelectedNames] = useState([]);

  const isSalesPersonSelected = (salesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === "all") &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0);

  return (
    <div>
      <Table marginTop="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>
                  <BadgeDelta deltaType={item.deltaType} size="xs" />
                  {"  "}
                  {item.name}
                </TableCell>
                <TableCell>{item.leads} km</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
