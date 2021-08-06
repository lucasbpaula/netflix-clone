import React from "react";
import { Section, Title } from "./styles";

export default function FeaturedMovie({ item }) {
  console.log(item);
  return (
    <Section>
      <Title>{item?.original_name}</Title>
    </Section>
  );
}
