import React from "react";
import "./index.css";

export default function StatsModal(props) {

    if(!props.isStatsModalOpen) {
        return null;
    }

    return(
        <div className="modal-blur"
        onClick={() => {
            props.setIsStatsModalOpen(false);
        }}>
            <div className="modal-body"
            onClick={e => {e.stopPropagation()}}>
            </div>
        </div>
    )
}