import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [productOfTheDay, setProductOfTheDay] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/product/200")
      .then((response) => setProductOfTheDay(response.data))
      .catch((error) => {
        //todo handle error
      });
  }, []);

  return (
    <div>
      <h2>Product Of The Day</h2>
      <img
        src={productOfTheDay.imageUrl}
        alt={`Product of the day id ${productOfTheDay.id}`}
        className="productOfTheDay"
      ></img>
      <p>{productOfTheDay.shortDescription}</p>
      <p>{productOfTheDay.brand}</p>
    </div>
  );
}
