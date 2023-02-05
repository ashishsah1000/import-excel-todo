import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  Spinner,
  Box,
  Input,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaChevronCircleRight, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTodos } from "../../features/todoSlice";

const ExcelReader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);

      const workbook = XLSX.read(data, { type: "array" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const sheetData = XLSX.utils.sheet_to_json(worksheet);
      const options = { header: 1 };
      const sheetData2 = XLSX.utils.sheet_to_json(worksheet, options);
      const header = sheetData2.shift();
      console.log(sheetData);
      setHeaders(header);
      setData(sheetData);
    };

    reader.readAsArrayBuffer(file);
  };
  const handleAddTodo = () => {
    // navigate("/todos", { state: data, replace: true });
    dispatch(updateTodos(data));
  };

  return (
    <Box
      background={"white"}
      height={"80vh"}
      width={"80vw"}
      overflow={"scroll"}
      position={"relative"}
      borderRadius={"lg"}
    >
      <Box
        position={"sticky"}
        bottom={"0px"}
        background={"ghostwhite"}
        display={"flex"}
        padding={"2"}
        boxShadow={
          " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
        }
      >
        <Box flex={1}>
          <input type="file" onChange={handleFile} />
        </Box>
        <Button size={"sm"} leftIcon={<FaSave />}>
          Save
        </Button>
        &nbsp;
        <Button
          size={"sm"}
          leftIcon={<FaChevronCircleRight />}
          colorScheme={"teal"}
          onClick={() => handleAddTodo()}
        >
          Next
        </Button>
      </Box>
      <Box padding={"4"}>
        {data.length > 0 ? (
          <TableContainer marginTop="12px">
            <Table size="sm">
              <Thead>
                <Tr>
                  {headers.map((x) => (
                    <Th>{x}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {data.map((row, index) => (
                  <Tr key={index}>
                    {Object.values(row).map((cell, cellIndex) => (
                      <Td key={cellIndex}>{cell}</Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Count</Th>
                  <Th>{data.length}</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        ) : (
          <Box display={"flex"} justifyContent={"center"}>
            <Spinner />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ExcelReader;
