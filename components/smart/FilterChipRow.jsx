import React from "react";
import { ScrollView } from "react-native";
import Chip from "../common/Chip";

export default function FilterChipsRow({ filters, activeFilter, onSelect }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12 }}>
      {filters.map((filter) => (
        <Chip
          key={filter}
          label={filter}
          active={filter === activeFilter}
          onPress={() => onSelect(filter)}
        />
      ))}
    </ScrollView>
  );
}
