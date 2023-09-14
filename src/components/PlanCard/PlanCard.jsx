import React from 'react'
import { FiCheck ,FiArrowRight} from "react-icons/fi";




const PlanCard = ({ data, checked }) => {
    return (
        <div className="cards" >
            <div className="card">
                <div className="prices">
                    <p className='price'><span>${checked ? data.ammountYealry : data.ammountMonthly}</span>{checked ? '/year' : '/month'}</p>
                    <h3>{data.planName}</h3>
                    <p>{data.describe}</p>
                </div>
                <div className="benifit">
                    {data.benifits.map((b, idx) => <p key={idx}><FiCheck className='icon' /> {b}</p>)}
                </div>
                <button>Get Started <FiArrowRight className='icon' /> </button>
            </div>
        </div>
    )
}

export default PlanCard