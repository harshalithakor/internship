import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext(null);

const initialValue = {
  productName: "",
  size: "",
  price: "",
  deliveryDate: "",
  image: null,
};

// const getStoredProducts = () => {
//   try {
//     const stored = localStorage.getItem("products");
//     return stored ? JSON.parse(stored) : [];
//   } catch (error) {
//     console.error("Error reading from localStorage:", error);
//     return [];
//   }
// };

export default function ProductProvider({ children }) {
  const [data, setData] = useState([]);
  const [values, setValues] = useState(initialValue);
  const [activeEditIndex, setActiveEditIndex] = useState(null);
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   try {
  //     localStorage.setItem("products", JSON.stringify(data));
  //   } catch (error) {
  //     console.error("Error saving to localStorage:", error);
  //   }
  // }, [data]);

  const addProduct = (product) => {
    console.log("Product data", product);
    setData((prev) => [...prev, product]);
  };

  console.log("data", data);

  const updateProduct = (index, product) => {
    setData((prev) => prev.map((item, i) => (i === index ? product : item)));
    setActiveEditIndex(null);
  };

  const deleteProduct = (index) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };

  const editData = (index) => {
    setValues(data[index]);
    setActiveEditIndex(index);
  };

  const resetForm = () => {
    setValues(initialValue);
    setActiveEditIndex(null);
  };

  return (
    <ProductContext.Provider
      value={{
        data,
        values,
        query,
        activeEditIndex,
        setValues,
        setQuery,
        addProduct,
        updateProduct,
        deleteProduct,
        editData,
        resetForm,
        initialValue,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
