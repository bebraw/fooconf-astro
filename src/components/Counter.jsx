import React from "react";

const Counter = ({ target }) => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>
        Count {target}: {count}
      </div>
      <button onClick={() => setCount((n) => n + 1)}>Add one</button>
    </div>
  );
};

export default Counter;
