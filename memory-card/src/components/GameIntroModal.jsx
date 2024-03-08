function GameIntroModal({ onClose }) {
    return (
        <div className="modalBackdrop">
            <div className="modalContent">
                <p>This is a modal!</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default GameIntroModal;