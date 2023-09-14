import React from 'react'
import { FiMove,FiFeather,FiLayers } from "react-icons/fi";
import { Events } from '../../components';

const eventsData = [
    {
        btnName: "Sign Up",
        description: "Make an account and login to keep yourself updated into travellers platform.",
        icon: <FiMove className='icon' />,
        redirectPath: "/signup"
    },
    {
        btnName: "Create Events",
        description: "Create an event to gather your fellow travellers and get to know them.",
        icon: <FiFeather className='icon' />,
        redirectPath: "/events"
    },
    {
        btnName: "Share Memories",
        description: "Upload and share stories with your fellow travellers anytime.",
        icon: <FiLayers className='icon' />,
        redirectPath: "/memories"
    },
   
]

const SectionThree = () => {
    return (
        <section className='sectionThree'>
            <div className='image'>
            </div>
            <div className="content">
                <p className='uppeprCase'>GET CONNECTED</p>
                <h2>Share your memories with your travel buddys</h2>
                {eventsData.map(data => <Events {...data} />)}
            </div>
        </section>
    )
}

export default SectionThree