// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "../../components/datatables/components/DevelopmentTable";
import CheckTable from "../../components/datatables/components/CheckTable";
import ColumnsTable from "../../components/datatables/components/ColumnsTable";
import ComplexTable from "../../components/datatables/components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "../../components/datatables/variables/columnsData";
import tableDataDevelopment from "../../components/datatables/variables/tableDataDevelopment.json";
import tableDataCheck from "../../components/datatables/variables/tableDataCheck.json";
import tableDataColumns from "../../components/datatables/variables/tableDataColumns.json";
import tableDataComplex from "../../components/datatables/variables/tableDataComplex.json";
import AdminLayout from "layouts/admin";

export default function Settings() {
  // Chakra Color Mode
  return (
    <AdminLayout title="Datatables">
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </AdminLayout>
  );
}
