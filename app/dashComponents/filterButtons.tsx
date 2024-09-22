import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native"; // Use correct imports
import { RFValue } from "react-native-responsive-fontsize";
import RNPickerSelect from "react-native-picker-select";
import { SelectList } from "react-native-dropdown-select-list";

export default function FilterButtons() {
  const [visibleDropdown, setVisibleDropdown] = useState<string | null>(null);
  const [sortByValue, setSortByValue] = useState(null);
  const [headphoneTypeValue, setHeadphoneTypeValue] = useState(null);
  const [companyValue, setCompanyValue] = useState(null);
  const [colorValue, setColorValue] = useState(null);
  const [priceValue, setPriceValue] = useState(null);

  const sortByOptions = [
    { key: "1", value: "Option 1" },
    { key: "2", value: "Option 2" },
    { key: "3", value: "Option 3" },
  ];

  const headphoneTypeOptions = [
    { key: "1", value: "In-Ear" },
    { key: "2", value: "On-Ear" },
    { key: "3", value: "Over-Ear" },
  ];

  const companyOptions = [
    { key: "1", value: "Sony" },
    { key: "2", value: "Bose" },
    { key: "3", value: "JBL" },
  ];

  const colorOptions = [
    { key: "1", value: "Black" },
    { key: "2", value: "White" },
    { key: "3", value: "Red" },
  ];

  const priceOptions = [
    { key: "1", value: "$0 - $50" },
    { key: "2", value: "$50 - $100" },
    { key: "3", value: "$100 - $200" },
  ];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.buttonContainer}>
        <View style={styles.dropdownContainer}>
          <SelectList
            setSelected={setSortByValue}
            data={sortByOptions}
            placeholder="Sort By"
            boxStyles={styles.dropdown}
            dropdownStyles={styles.dropdownContainerStyle}
          />
        </View>

        <View style={styles.dropdownContainer}>
          <SelectList
            setSelected={setHeadphoneTypeValue}
            data={headphoneTypeOptions}
            placeholder="Headphone Type"
            boxStyles={styles.dropdown}
            dropdownStyles={styles.dropdownContainerStyle}
          />
        </View>

        <View style={styles.dropdownContainer}>
          <SelectList
            setSelected={setCompanyValue}
            data={companyOptions}
            placeholder="Company"
            boxStyles={styles.dropdown}
            dropdownStyles={styles.dropdownContainerStyle}
          />
        </View>

        <View style={styles.dropdownContainer}>
          <SelectList
            setSelected={setColorValue}
            data={colorOptions}
            placeholder="Color"
            boxStyles={styles.dropdown}
            dropdownStyles={styles.dropdownContainerStyle}
          />
        </View>

        <View style={styles.dropdownContainer}>
          <SelectList
            setSelected={setPriceValue}
            data={priceOptions}
            placeholder="Price"
            boxStyles={styles.dropdown}
            dropdownStyles={styles.dropdownContainerStyle}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around", // or "space-between"
    alignItems: "stretch", // Ensures dropdowns stretch to full height
    paddingHorizontal: 10,
    height: "100%",
  },
  dropdownContainer: {
    flex: 1, // Allow each dropdown to take equal space
    marginHorizontal: 5, // Optional: Space between dropdowns
    position: "relative", // Required for dropdown positioning
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  dropdownContainerStyle: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },

});
