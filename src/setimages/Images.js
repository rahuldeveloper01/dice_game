import React, { useEffect, useState } from "react";
import Index from "../components/Index";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Pagination, TextField } from "@mui/material";
const url = "http://localhost:5000/products";
const Images = () => {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async () => {
    const url = "http://localhost:5000/products";
    const formData = new FormData();
    formData.append("image", image);
    await axios.post(url, formData);
  };

  const getProductList = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setProductList(res.data);
  };

  const rowsPerPage = 5;

  useEffect(() => {
    const searchProducts = productList.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    const lastIndex = currentPage * rowsPerPage;
    const firstIndex = lastIndex - rowsPerPage;
    const currentPageProducts = searchProducts.slice(firstIndex, lastIndex);

    const totalPageCount = Math.ceil(searchProducts.length / rowsPerPage);
    setTotalPages(totalPageCount);
    setFilteredProducts(currentPageProducts);
  }, [search, productList, currentPage]);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <Box>
      <Box>
        <TextField type="file" name="image" onChange={handleImageChange} />
      </Box>
      <Box>
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

      <Box>
        <TableContainer component={Paper}>
          <TextField
            value={search}
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Brand</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.brand}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">{row.category}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChangePage}
      />
    </Box>
  );
};

export default Images;
