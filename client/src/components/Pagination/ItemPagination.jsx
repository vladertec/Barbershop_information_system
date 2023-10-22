import { Pagination } from "@mui/material"
import { useSearchParams } from "react-router-dom"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  pagination: {
    ulWhite: {
      "& .MuiPaginationItem-root": {
        color: "#b48e40",
      },
    },
  },
})

const ItemPagination = () => {
  const [search, setSearch] = useSearchParams()
  //   const productsQuntity = useSelector((state) => state.catalog.productsQuntity);
  const setPage = (currentPage) => {
    const linkWithoutPagesInfo = search
      .toString()
      .slice(0, search.toString().search("perPage"))

    setSearch(linkWithoutPagesInfo + `perPage=10&startPage=${currentPage}`)
  }

  return (
    <>
      <Pagination
        sx={theme.pagination.ulWhite}
        shape="rounded"
        onChange={(e, v) => {
          setPage(v)
        }}
        page={+search.getAll("startPage")}
        count={Math.ceil(6 / 10)}
      />
    </>
  )
}

export default ItemPagination
