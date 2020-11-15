import React, { useState } from "react";
import Element from "./Element";
import { useSelector } from "react-redux";

const List = () => {
  const rates = useSelector((store) => store.rates);
  const listElements = rates.map((rate) => <Element key={rate.id} {...rate} />);
  return <ul>{listElements}</ul>;
};

export default List;
