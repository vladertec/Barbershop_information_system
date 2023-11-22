const Modal = ({ updateModalIsOpen, type }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <button
          className="modal__button-x"
          onClick={() => {
            updateModalIsOpen(false)
          }}
        >
          X
        </button>
      </div>
      <div className="modal__text-container">
        <h3 className="modal__text">
          Your products have been added to the {type}
        </h3>
        <div>
          <button
            className="modal__button"
            onClick={() => {
              updateModalIsOpen(false)
            }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
