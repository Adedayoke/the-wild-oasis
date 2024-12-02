import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy options={[
        {value: "name-asc", label: 'Sort by name (A-Z)'},
        {value: "name-dsc", label: 'Sort by name (Z-A)'},
        {value: "regularPrice-asc", label: 'Sort by Price (low first)'},
        {value: "regularPrice-dsc", label: 'Sort by Price (high first)'},
        {value: "maxCapacity-asc", label: 'Sort by Capacity (low first)'},
        {value: "maxCapacity-dsc", label: 'Sort by Capacity (high first)'},
      ]} />
    </TableOperations>
  );
}