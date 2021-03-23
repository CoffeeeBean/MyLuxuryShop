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
      <h1> My Luxury Shop</h1>
      <hr />
      <h2>Product Of The Day</h2>
      <img
        src={productOfTheDay.imageUrl}
        alt="Product of the day"
        className="productOfTheDay"
      ></img>
    </div>
  );
}
