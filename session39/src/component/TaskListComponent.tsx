import React from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task; 
  toggleTaskCompletion: (taskId: number) => void;
  setTaskToDelete: (taskId: number) => void;
  setShowModal: (show: boolean) => void;
  editTask: (taskId: number, newTitle: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion, setTaskToDelete, setShowModal, editTask }) => {
  const handleToggleCompletion = () => {
    toggleTaskCompletion(task.id);
  };

  const handleDelete = () => {
    setTaskToDelete(task.id);
    setShowModal(true);
  };

  const handleEdit = (newTitle: string) => {
    editTask(task.id, newTitle);
  };

  return (
    <li className={`list-group-item ${task.completed? 'completed' : ''}`}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompletion}
        />
        <label className="form-check-label">{task.title}</label>
      </div>
      <div className="task-actions">
        <button className="btn btn-sm btn-primary" onClick={() => setShowModal(true)}>Edit</button>
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};
export default TaskItem;