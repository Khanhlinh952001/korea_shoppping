"use client"
import { database } from "../data/firebaseConfig";
import { ref, child, get } from "firebase/database";
import { useState, useEffect } from "react";
import { useData } from "./useData";


export const useDetail = (productId) => {
  const [detail,setDetail] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(ref(database), "Products"));
        if (snapshot.exists()) {
          const result = snapshot.val();
          const filteredData = Object.values(result).find(
            (value) => value.code === productId
          );
          setDetail(filteredData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [productId]);
  


  return { detail };
};
