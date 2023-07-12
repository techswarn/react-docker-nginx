import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fib() {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState("");

  const fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    setValues(values.data);
  };

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values/all");
    setSeenIndexes(seenIndexes.data);
  };

  const renderSeenIndex = () => {
    return seenIndexes.map(({ number }) => number).join(", ");
  };

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>For index {key} I calculated values[key]</div>
      );
    }
    return entries;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: index,
    });

    setIndex("");
  };

  useEffect(() => {
    fetchIndexes();
    fetchValues();
  }, []);

  return (
    <div>
      <h1>Hello from Frontend</h1>
    </div>
  );
}
