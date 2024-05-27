import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskFormComopent';
import TaskList from './components/TaskListComopent';
import Modal from './components/ModalComopent';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')? JSON.parse(localStorage.getItem('tasks')) : [];
    setTasks(savedTasks);
  }, []);

  const addTask = (taskName: any) => {
    if (taskName &&!tasks.some((task: { name: any; }) => task.name === taskName)) {
      const newTasks = [...tasks, { name: taskName, completed: false }];
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  };

  const deleteTask = () => {
    const newTasks = tasks.filter((task: any) => task!== taskToDelete);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setShowModal(false);
    setTaskToDelete(null);
  };

  const toggleTaskCompletion = (task: any) => {
    const newTasks = tasks.map(t => t === task? {...t, completed:!t.completed } : t);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const editTask = (oldTask: any, newTaskName: any) => {
    const newTasks = tasks.map(t => t === oldTask? {...t, name: newTaskName } : t);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <div className="container py-5 h-100">
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        setTaskToDelete={setTaskToDelete}
        setShowModal={setShowModal}
        editTask={editTask}
      />
      {showModal && (
        <Modal
          task={taskToDelete}
          onDelete={deleteTask}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default App;