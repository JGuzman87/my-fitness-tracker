"use client"
import MealsForm from "./MealsForm";
export default function Modal() {

return (
  <>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
    <button
      className="btn"
      onClick={() => document.getElementById("my_modal_2").showModal()}
    >
      add a meal
    </button>
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <MealsForm />
      </div>
      <form method="dialog" className="modal-backdrop ">
        <button>close</button>
      </form>
    </dialog>
  </>
);  


}