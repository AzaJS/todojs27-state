import React, { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(false);
  // состояние булевого значения для лайка
  return (
    <div>
      {/* на клик меняется предыдущее состояние (переворачивается значение) */}
      <h2 onClick={() => setLike((prevState) => !prevState)}>
        {/* в зависимости от состояния отображается тот или иной текст(смайлик) */}
        Like: {like ? "❤️" : "♡"}
      </h2>
    </div>
  );
};

export default Like;
