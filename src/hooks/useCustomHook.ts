import { useState } from "react";

export default () => {
  const [data, setData] = useState<null | string>("");

  function createStore() {
    return {
      data,
      setData,
    };
  }

  return {
    createStore,
  };
};
