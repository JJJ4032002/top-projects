import './GameIntroModal.css'
function GameIntroModal({ onClose }) {
    return (
        <dialog open>
            <h2>Hey, cool modal here</h2>
            <button onClick={onClose}>Close</button>
        </dialog>
    );
}

export default GameIntroModal;