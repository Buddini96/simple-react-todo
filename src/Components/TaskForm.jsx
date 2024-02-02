import React, { useState } from "react";

function TaskForm({onAdd}) {
  const [taskName, setTaskName] = useState("");
  function handleSubmit(ev) {
      ev.preventDefault();  
      onAdd(taskName);
      setTaskName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        placeholder="Your Next task..."
        onChange={(ev) => setTaskName(ev.target.value)}>
        </input>
    </form>
  );
}

export default TaskForm;
