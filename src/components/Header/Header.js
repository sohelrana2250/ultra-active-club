import React, { useEffect, useState } from 'react';
import Activity from '../Activity-Info/Activity';
import Card from '../Right-Info/Card';
import './Header.css'
import logo from '../../Image/activity.png'
import Blog from '../Blog/blog'



const Header = () => {

    const [activity, setActivity] = useState([])

    const [activityCard, setActivityCard] = useState([])

    useEffect(() => {

        fetch('fakeData.json').then((res) => res.json()).then((data) => setActivity(data)).catch((error) => console.log(error.message))


    }, [])



    const HandelClick = (clickData) => {


        const newActivityCard = [...activityCard, clickData];
        setActivityCard(newActivityCard);




    }








    return (

        <div>


            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <b><img src={logo} className='rounded-circle logo-image' alt="" /> <button type="button" className="btn btn-primary fs-3"><b>FootBall  Club Activity</b></button></b>

                    </div>
                </nav>
            </div>


            <Blog></Blog>

            <h2 className='text-center mt-3 fs-3'><b>Select today’s FootBall Activity</b></h2>

            <div className='margint-section Shop'>
                <div className="product-container">
                    {
                        activity.map((data, index) => <Activity key={index} data={data} handelAddActivity={HandelClick}></Activity>)
                    }
                </div>

                <div className="card-container">

                    <Card activityCard={activityCard}></Card>



                </div>





            </div>
        </div>
    );
};

export default Header;