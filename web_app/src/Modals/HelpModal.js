import "./modals.css";
import React from "react";

export default function HelpModal(props) {

    if(!props.isHelpModalOpen) {
        return null;
    }

    return(
        <div className="modal-blur"
        onClick={() => {
            props.setIsHelpModalOpen(false);
        }}>
            <div className="modal-body"
            onClick={e => {e.stopPropagation()}}>
                <div className="modal-header">
                    <span>HOW TO PLAY</span>
                </div>
            </div>
        </div>
    )
}