import React from 'react'
import { Switch, PlanCard } from '../../components'

const SectionFive = () => {
    const [checked, setChecked] = React.useState(true);


    const plansData = [
        {
            ammountMonthly: 29,
            ammountYealry: 500,
            planName: "Standard",
            describe: "All the basics for businesses that are just getting started.",
            benifits: ['Organizes your travel plans',
                'Find places near hotel',
                'Tallies & displays travel stats'
            ]

        },
        {
            ammountMonthly: 99,
            ammountYealry: 1000,
            planName: "Essentials",
            describe: "Advanced features for travelling that are needed.",
            benifits: ['Organizes your travel plans',
                'Find places near hotel',
                'Tallies & displays travel stats',
                'Find places near hotel',
            ]

        },
        {
            ammountMonthly: 129,
            ammountYealry: 1500,
            planName: "Premium",
            describe: "Advanced features for pros who need more customization.",
            benifits: ['Organizes your travel plans',
                'Find places near hotel',
                'Tallies & displays travel stats',
                'Find places near hotel',
                'Tallies & displays travel stats',
            ]

        },
    ]



    return (
        <section className='sectionFive'>
            <div className="content">
                <p className='uppeprCase'>PRICING TABLE</p>
                <h2>Choose the plan that's right for you</h2>
            </div>

            <div className='plans'>
                <div className='bills'>
                    <p>Bill Monthly</p>
                    <Switch
                        isOn={checked}
                        handleToggle={() => setChecked(!checked)}

                    />
                    <p>Bill Annually</p>
                </div>
                <div className="cards">
                    {
                        plansData.map((data, idx) => <PlanCard data={data} key={idx} checked={checked} />
                        )
                    }
                </div>
            </div>
            <div className='image'>
            </div>
        </section>


    )
}

export default SectionFive