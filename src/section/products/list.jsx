import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { ProductContext } from "../../Context/context";

export default function ProductList() {
  const { data, query, setQuery, editData, deleteProduct } =
    useContext(ProductContext);
  const navigate = useNavigate();
  // const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  // const [data, setData] = useState([]);
  const [debouncedData] = useDebounce(query, 1500);

  // const savedData = localStorage.getItem("products");

  // const updateDataToLocalStroage = (newData) => {
  //   const stringifyData = JSON.stringify(newData);
  //   localStorage.setItem("products", stringifyData);
  // };

  const deleteData = (index) => {
    const newData = data.filter((_, i) => i !== index);
    updateDataToLocalStroage(newData);
    setData(newData);
  };

  // const editData = (index) => {
  //   setValues(data[index]);
  //   setActiveEditIndex(index);
  // };

  const filteredData =
    data.length > 0
      ? data.filter((item) => {
          const searchMatch =
            `${item?.productName} ${item?.size} ${item?.price} ${item?.deliveryDate}`
              .toLowerCase()
              .includes(debouncedData.toLowerCase());
          const product = Number(item.price);
          const minMatch = minPrice === "" || product >= Number(minPrice);
          const maxMatch = maxPrice === "" || product <= Number(maxPrice);

          return searchMatch && minMatch && maxMatch;
        })
      : [];

  // useEffect(() => {
  //   if (savedData) {
  //     setData(JSON.parse(savedData));
  //   }
  // }, [savedData]);

  return (
    <div className="min-h-screen flex flex-col items-center py-5">
      {/* <div className="w-full flex justify-end p-1">
        <button
          className="bg-cyan-200 p-2 rounded-md cursor-pointer"
          type="button"
          onClick={() => navigate("/create")}
        >
          + Product
        </button>
      </div> */}
      {/* <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-4 mt-5">
        <h3 className="text-lg font-semibold text-black mb-2 text-center">
          Search Product
        </h3>
        <input
          type="search"
          placeholder="Search Here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div> */}

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-3 mt-5" style={{
        backgroundImage: "url('/assets/product.png')",
      }}>
        <div>
          <h4
            className="text-lg font-semibold text-white mb-2 text-center"
            style={{
              backgroundImage: "url('/assets/product.png')",
            }}
          >
            Shop by price
          </h4>
        </div>
       <div>
  <div className="flex justify-center py-2 rounded">
    <input
      type="number"
      placeholder="min"
      value={minPrice}
      onChange={(e) => setMinPrice(e.target.value)}
      className="mr-3 px-2 py-1 border border-[#8B5E3C] rounded focus:outline-none text-white"
    />

    <input
      type="number"
      placeholder="max"
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
      className="px-2 py-1 border border-[#8B5E3C] rounded focus:outline-none text-white"
    />
  </div>
</div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
        {filteredData.map((item, i) => (
          <div key={i} className="bg-[#F5EFE6] shadow-md rounded-xl p-5">
            <h2 className="font-bold">Product Name: {item.productName}</h2>
            <p>Size: {item.size}</p>
            <p>Price: {"₹" + item.price}</p>
            <p>Delivery Date: {item.deliveryDate}</p>

            {item.image && (
              <img
                src={item.image}
                alt="preview"
                className="w-24 h-24 object-cover mt-2 rounded"
              />
            )}

            <div className="flex justify-around py-1 m-3 ">
              <button
                onClick={() => {
                  editData(i);
                  navigate("/create");
                }}
                className="bg-yellow-400 px-4 py-1 rounded text-white hover:bg-yellow-500"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(i)}
                className="bg-red-400 px-4 py-1 rounded text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
