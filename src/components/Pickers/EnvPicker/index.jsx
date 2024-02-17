import React, { useContext, useState } from "react";
import EnvItem from "./EnvItem";

const styles = {};

function EnvPicker({ envs }) {
  return envs.map((env, index) => (
    <EnvItem key={index} env={env} />
  ));
}

export default EnvPicker;
