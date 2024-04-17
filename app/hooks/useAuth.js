import { useState, useEffect } from "react";
import { auth, database } from "../data/firebaseConfig";
import { ref, child, get } from "firebase/database";

export const useAuth = () => {
  const [client, setClient] = useState(null); // Initialize client state with null
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const uid = user.uid;
        const Ref = ref(database);
        try {
          // Fetch client data
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
        setClient(null); // Clear client data when user logs out
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from auth state changes when component unmounts
    };
  }, []);

  return { client, isAuthenticated };
};
