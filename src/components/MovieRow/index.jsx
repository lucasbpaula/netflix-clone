import React from "react";
import { Container, Item, List, ListArea, Title } from "./styles";

export default function MovieRow({ title, items }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ListArea>
        <List>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <Item key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </Item>
            ))}
        </List>
      </ListArea>
    </Container>
  );
}
