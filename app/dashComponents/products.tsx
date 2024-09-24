import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import axios from "axios";

// Define the type for the product items
interface Product {
  id: number;
  title: string;
  image: string;
  price: number; // Add price to the interface

}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from the fake API using axios
        const response = await axios.get("https://fakestoreapi.com/products");
        debugger
        setProducts(response.data); // Set the fetched products
      } catch (err) {
        setError("Error fetching products"); // Handle the error
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>Product Name: {item.title}</Text>
      <Text style={styles.productTitle}>Price: {item.price}</Text>

    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        nestedScrollEnabled={true}
        numColumns={2} // Set the number of columns for side-by-side layout
        columnWrapperStyle={styles.columnWrapper} // Style for the column wrapper
        // horizontal // Set to horizontal for row layout
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  productContainer: {
    flexDirection: "column", // Keep as column for vertical alignment within each product
    alignItems: "center",
    marginRight: 16, // Space between product boxes
    width: 200, // Set width to 300
    height: 250, // Set height to 350
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: "#f9f9f9",
    margin:10
  },
  productImage: {
    width: 100, // Increased width for better visibility
    height: 100, // Increased height for better visibility
    marginBottom: 8, // Space between image and title
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "600", // Bold title for emphasis
    textAlign: "center",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginVertical: 10,
  },
  columnWrapper: {
    justifyContent: "space-evenly", // Space out the products evenly
  },

});

export default Products;
