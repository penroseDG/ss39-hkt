import React from 'react';
interface ModalProps {
  task: { name: string }; 
  onDelete: () => void;
  onClose: () => void; 
}
const Modal: React.FC<ModalProps> = ({ task, onDelete, onClose }) => {
  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5>Xác nhận</h5>
          <i className="fas fa-xmark" onClick={onClose}></i>
        </div>
        <div className="modal-body-custom">
          <p>Bạn chắc chắn muốn xóa công việc {task.name}?</p>
        </div>
        <div className="modal-footer-footer">
          <button className="btn btn-light" onClick={onClose}>Hủy</button>
          <button className="btn btn-danger" onClick={onDelete}>Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;