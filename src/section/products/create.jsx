import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/context";
import imageConverter from "./imageConverter";

export default function ProductCreateForm() {
  // const {
  //   data,
  //   setData,
  //   values,
  //   setValues,
  //   activeEditIndex,
  //   setActiveEditIndex,
  //   initialValue,
  // } = useContext(ProductContext);
  const {
    data,
    values,
    setValues,
    activeEditIndex,
    addProduct,
    updateProduct,
    resetForm,
    initialValue,
  } = useContext(ProductContext);

  const navigate = useNavigate();
  const [inputKey, setInputKey] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const multiSubmit = async (e) => {
    e.preventDefault();

    if (
      !values.productName ||
      !values.size ||
      !values.price ||
      !values.deliveryDate
    ) {
      alert("Please fill all the details");
      return;
    }

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1000));

    if (activeEditIndex !== null) {
      // Update existing product
      updateProduct(activeEditIndex, values);
    } else {
      // Add new product
      addProduct(values);
    }

    // Reset form and input key
    resetForm();
    setInputKey((prev) => prev + 1);
    setIsSubmitting(false);
    
    // Navigate back to list
    navigate("/");
  };
  // const initialValue = {
  //   productName: "",
  //   size: "",
  //   price: "",
  //   deliveryDate: "",
  //   image: null,
  // };

  // const navigate = useNavigate();
  // const [values, setValues] = useState(initialValue);
  // const [data, setData] = useState([]);
  // const [inputKey, setInputKey] = useState(1);
  // const [activeEditIndex, setActiveEditIndex] = useState(null);

  // const [isSubmitting, setIsSubmitting] = useState(false);

  // // useEffect(() => {
  // //   const saved = localStorage.getItem("products");
  // //   if (saved) {
  // //     setData(JSON.parse(saved));
  // //   }
  // // }, []);

  // // const updateDataToLocalStroage = (newData) => {
  // //   const stringifyData = JSON.stringify(newData);
  // //   localStorage.setItem("products", stringifyData);
  // // };

  // const multiSubmit = async (e) => {
  //   e.preventDefault();

  //   if (
  //     !values.productName ||
  //     !values.size ||
  //     !values.price ||
  //     !values.deliveryDate
  //   ) {
  //     alert("Please fill all the details");
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   await new Promise((res) => setTimeout(res, 3000));

  //   if (activeEditIndex !== null) {
  //     const updatedData = data.map((item, i) =>
  //       i === activeEditIndex ? values : item
  //     );

  //     setData(updatedData);
  //     updateDataToLocalStroage(updatedData);
  //     setActiveEditIndex(null);
  //   } else {
  //     const updated = [...data, values];
  //     setData(updated);
  //     updateDataToLocalStroage(updated);
  //   }

  //   setValues(initialValue);
  //   setInputKey((prev) => prev + 1);

  //   setIsSubmitting(false);
  //   navigate("/");
  // };

  return (
    <div className="min-h-screen  flex flex-col items-center p-6">
      <form
        onSubmit={multiSubmit}
        className=" shadow-lg rounded-xl p-6 w-full max-w-md" style={{
        backgroundImage: "url('/assets/product.png')"
      }}
      >
        <h1 className="text-white font-extrabold text-center mb-4">
          Product Page Design
        </h1>

        <input
          type="text"
          placeholder="Product Name"
          value={values.productName}
          onChange={(e) =>
            setValues({ ...values, productName: e.target.value })
          }
          className="w-full mb-4 p-2 border rounded text-white"
        />

        <input
          type="text"
          placeholder="Size"
          value={values.size}
          onChange={(e) => setValues({ ...values, size: e.target.value })}
          className="w-full mb-4 p-2 border rounded text-white"
        />

        <input
          type="number"
          placeholder="Product Price"
          value={values.price}
          onChange={(e) => setValues({ ...values, price: e.target.value })}
          className="w-full mb-4 p-2 border rounded text-white"
        />

        <input
          type="date"
          value={values.deliveryDate}
          onChange={(e) =>
            setValues({ ...values, deliveryDate: e.target.value })
          }
          className="w-full mb-4 p-2 border rounded text-white"
        />

        <input
          type="file"
          accept="image/*"
          key={inputKey}
          onChange={async (e) => {
            const file = e.target.files[0];
            if (file) {
              const base64 = await imageConverter(file);
              setValues({ ...values, image: base64 });
            }
          }}
          className="mb-3 text-white"
        />

        {values.image && (
          <img
            src={values.image}
            alt="preview"
            className="w-24 h-24 object-cover mb-3 rounded"
          />
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          {isSubmitting
            ? "...Submitting"
            : activeEditIndex !== null
              ? "Update"
              : "Submit"}
        </button>
      </form>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-4xl">
        {data.map((item, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-4">
            <h2 className="font-bold">{item.productName}</h2>
            <p>Size: {item.size}</p>
            <p>Price: ₹{item.price}</p>
            <p>Date: {item.deliveryDate}</p>

            {item.image && (
              <img
                src={item.image}
                className="w-24 h-24 object-cover mt-2 rounded"
              />
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
}
