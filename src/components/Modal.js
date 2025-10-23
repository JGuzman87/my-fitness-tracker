"use client"

export default function Modal({btnName, children, modalId }) {

return (
  <>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
    <button
      className="btn"
      onClick={() => document.getElementById(modalId).showModal()}
    >
      {btnName}  
    </button>
    <dialog id={modalId} className="modal">
      <div className="modal-box">
       {children}
      </div>
      <form method="dialog" className="modal-backdrop ">
        <button>close</button>
      </form>
    </dialog>
  </>
);  


}