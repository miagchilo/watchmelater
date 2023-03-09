import React, { useState } from "react";
import styled from "styled-components";
const ListForm = styled.form`
  padding-left: 220px;
  padding-top: 60px;
`;
const Label = styled.label`
  color: #00000;
  font-size: 35px;
  padding: 34px;
`;
const PlaylistName = styled.input`
  width: 100px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 250px;
`;
const Createlistbtn = styled.button`
  margin-left: 24px;
  width: 100px;
  margin-bottom: 61px;
  height: 45px;
  border: 1px solid gray;
  background-color: #gray;
  color: #yellow;
  font-size: 18px;
  border-radius: 250px;
`;

const Form = ({ ThisonSubmit }) => {
  const [text, setText] = useState("");
  return (
    <ListForm
      onSubmit={(e) => {
        e.preventDefault();
        ThisonSubmit(text);
      }}
    >
      <Label>Playlist Name:</Label>
      <PlaylistName
        value={text}
        onChange={(e) => {
          e.preventDefault();
          setText(e.target.value);
        }}
      />
      <Createlistbtn type="submit">🪩</Createlistbtn>
    </ListForm>
  );
};
export default Form;