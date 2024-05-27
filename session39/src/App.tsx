import React from 'react';
import AppComponent from './component/AppComponent';
import ModalComponent from './component/ModalComponent';
import TaskFormComponent from './component/TaskFormComponent';
import TaskItemComponent from './component/TaskItemComponent';
import TaskListComponent from './component/TaskListComponent';

// Define the Task interface
interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export default function App() {
  return (
    <div>
      <AppComponent></AppComponent> 
      <ModalComponent task={{
        name: ''
      }} onDelete={function (): void {
        throw new Error('Function not implemented.')
      } } onClose={function (): void {
        throw new Error('Function not implemented.')
      } }></ModalComponent>
      <TaskFormComponent addTask={undefined}></TaskFormComponent>
      <TaskItemComponent task={undefined} toggleTaskCompletion={undefined} setTaskToDelete={undefined} setShowModal={undefined} editTask={undefined}></TaskItemComponent>
      <TaskListComponent task={{ id: 1, name: 'Sample Task', completed: false }} toggleTaskCompletion={function (taskId: number): void {
        throw new Error('Function not implemented.');
      } } setTaskToDelete={function (taskId: number): void {
        throw new Error('Function not implemented.');
      } } setShowModal={function (show: boolean): void {
        throw new Error('Function not implemented.');
      } } editTask={function (taskId: number, newTitle: string): void {
        throw new Error('Function not implemented.');
      } }></TaskListComponent>
    </div>
  )
}