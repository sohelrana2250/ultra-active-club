import React, { useEffect, useState } from 'react';
import Activity from '../Activity-Info/Activity';
import Card from '../Right-Info/Card';
import './Header.css'


const Header = () => {

    const [activity, setActivity] = useState([])

    useEffect(() => {

        fetch('fakeData.json').then((res) => res.json()).then((data) => setActivity(data)).catch((error) => console.log(error.message))


    }, [])

    console.log(activity)


    return (

        <div>

            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <b><button type="button" className="btn btn-primary fs-3"><b>FootBall Activity Club</b></button>

                        </b>
                    </div>
                </nav>
            </div>



            <div className='margint-section Shop'>
                <div className="product-container">
                    {
                        activity.map((data, index) => <Activity key={index} data={data}></Activity>)
                    }
                </div>

                <div className="card-container">

                    <Card></Card>



                </div>





            </div>
        </div>
    );
};

export default Header;