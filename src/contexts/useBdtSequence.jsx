import React, { useState, useEffect } from "react";

export const BdtContext = React.createContext(null);

const BdtContextProvider = (props) => {
  const [bdtSequence, setBdtSequence] = useState();
  const [tests, setTests] = useState([]);

  function addTest(test) {
    setTests((tests) => [...tests, test]);
  }

  return (
    <BdtContext.Provider
      value={{
        bdtSequence,
        tests,
        addTest,
      }}
    >
      {props.children}
    </BdtContext.Provider>
  );
};

export default BdtContextProvider;
