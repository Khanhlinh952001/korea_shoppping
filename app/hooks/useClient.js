import { useState, useEffect } from "react";
import { auth, database } from "../data/firebaseConfig";
import { ref, child, get, set } from "firebase/database";
import { useData } from "./useData";
export const useClient = () => {
  const [client, setClient] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartProducts, setCartProducts] = useState([]); 
   const {data}= useData();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Access the uid here
        const uid = user.uid;
        const Ref = ref(database);
        try {
          const snapshot = await get(child(Ref, `usersMember/${uid}`));
          if (snapshot.exists()) {
            setClient(snapshot.val());
            setIsAuthenticated(true);
          } else {
            console.log("No data available for user");
          }
        } catch (error) {
          console.error("Error fetching client data:", error);
        }
      } else {
        setIsAuthenticated(false);
        setClient(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const addCart = ({ id, quantity }) => {
    try {
      // Assuming 'database' is your Firebase Realtime Database instance
      // Access uid inside the function
      const uid = auth.currentUser.uid;
      set(ref(database, `usersMember/${uid}/cart/${id}`), {
        quantity: quantity
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  const removeCart = ({ id }) => {
    try {
      // Assuming 'database' is your Firebase Realtime Database instance
      // Access uid inside the function
      const uid = auth.currentUser.uid;
      set(ref(database, `usersMember/${uid}/cart/${id}`), {
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const uid = user.uid;
        const Ref = ref(database);
        try {
          const snapshot = await get(child(Ref, `usersMember/${uid}`));
          if (snapshot.exists()) {
            setClient(snapshot.val());
            setIsAuthenticated(true);
            // Lấy giỏ hàng của người dùng từ dữ liệu
            const userCart = snapshot.val().cart;
            // Lấy danh sách mã sản phẩm trong giỏ hàng của người dùng
            const cartProductIds = userCart ? Object.keys(userCart) : [];
            // Lọc ra các sản phẩm có mã sản phẩm trùng với mã sản phẩm trong giỏ hàng
            // const cartProducts = cartProductIds.map(id => data.Products[productId]);
            setCartProducts(cartProductIds);
          } else {
            console.log("No data available for user");
          }
        } catch (error) {
          console.error("Error fetching client data:", error);
        }
      } else {
        setIsAuthenticated(false);
        setClient(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [data]);


  return { client, isAuthenticated, cart, addCart,removeCart ,cartProducts};
};
