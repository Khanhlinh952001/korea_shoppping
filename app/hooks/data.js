"use client"
import { database } from "../data/firebaseConfig";
import { ref, child, get } from "firebase/database";
import { useState, useEffect } from "react";

export const useData = (productId) => {
  const [data, setData] = useState([]);
  const [cartData,setCartData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Corrected import for the 'get' function
        const snapshot = await get(child(ref(database), "Products"));

        if (snapshot.exists()) {
          const result = snapshot.val();
          const filteredData = Object.values(result).filter(
            (value) => value.status === "true"
          );
          setData(filteredData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(ref(database), "Products"));
        if (snapshot.exists()) {
          const result = snapshot.val();
          const filteredData = Object.values(result).find(
            (value) => value.code === productId
          );
          setCartData(filteredData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [productId]);

  return { data ,cartData };
};
