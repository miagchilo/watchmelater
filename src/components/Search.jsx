import React, { useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { AppContext } from "../App";
// style;
const SearchForm = styled.form`
  padding-bottom: 50px;
  padding-left: 180px;
  padding-top: 60px;
  
`;
const SearchVid = styled.input`
  height: 40px;
  width: 100px;
  border-radius: 50px;
  border: 1px solid gray;
  
`;
const SearchBtn = styled.button`
margin-left: 24px;
width: 100px;
margin-bottom: 55px;
border-radius: 250px;
height: 45px;

border: 1px solid gray;
background-color: #gray;
color: #yellow;
font-size: 18px;
`;
const Label = styled.label`
  color: #00000;
  font-size: 35px;
  padding: 34px;
`;

export default function Search() {
  const { register, handleSubmit } = useForm();
  const { setSearchTerm } = useContext(AppContext);

  const onSubmit = (data) => {
    setSearchTerm(data.text);
  };

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <Label>Search video:</Label>
      <SearchVid type="text" {...register("text")} />
      <SearchBtn>🔍</SearchBtn>
    </SearchForm>
  );
}