import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      addTask(taskName);
      setTaskName('');
    } else {
      alert('Tên công việc không được phép để trống.');
    }
  };

  return (
    <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
      <div className="form-outline flex-fill">
        <input
          type="text"
          id="form2"
          className="form-control"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <label className="form-label" htmlFor="form2">Nhập tên công việc</label>
      </div>
      <button type="submit" className="btn btn-info ms-2">Thêm</button>
    </form>
  );
};

export default TaskForm;
