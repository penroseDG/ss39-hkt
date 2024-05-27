import React, { useState } from 'react';

const TaskItem = ({ task, toggleTaskCompletion, setTaskToDelete, setShowModal, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleEdit = () => {
    if (isEditing && newTaskName) {
      editTask(task, newTaskName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded" style={{ backgroundColor: '#f4f6f7' }}>
      <div>
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task)}
        />
        {isEditing ? (
          <input type="text" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
        ) : (
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
        )}
      </div>
      <div className="d-flex gap-3">
        <i className="fas fa-pen-to-square text-warning" onClick={handleEdit}></i>
        <i className="far fa-trash-can text-danger" onClick={() => { setTaskToDelete(task); setShowModal(true); }}></i>
      </div>
    </li>
  );
};

export default TaskItem;
