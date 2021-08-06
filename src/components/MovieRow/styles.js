import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin: 0px 0px 0px 30px;
`;

export const Item = styled.div`
  display: inline-block;
  width: 150px;
  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }

  img:hover {
    transform: scale(1);
  }
`;

export const List = styled.div`
  width: 9999px;
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;
