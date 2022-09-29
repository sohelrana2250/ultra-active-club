import React, { useEffect, useState } from 'react';
import './Card.css'
import logo from '../../Image/MyPic.jpg'
import { getItemActivity, setItemActivity } from '../../Utilites/fakeDB';

const Card = (props) => {

    const [activityTime, setActivityTime] = useState()




    const { activityCard } = props;




    let totalTime = 0;
    for (const time of activityCard) {

        totalTime = totalTime + time.time
    }

    const timeClick = (time) => {

        setItemActivity(time);
        //  console.log(time)



    }

    // const getItem = getItemActivity()








    const getItem = getItemActivity()
    useEffect(() => {

        for (const id in getItem) {

            setActivityTime(getItem[id].time);

        }




    }, [getItem])










    return (
        <div className='card'>

            <div className='row'>

                <div className='col-lg-6 col-sm-12'>
                    <img src={logo} className='rounded-circle w-50' alt="" />
                </div>


                <div className='col-lg-6 col-sm-12' >
                    <p>Ali Mohammad Sohel Rana <small>Address : Dhaka Bangladesh</small></p>

                </div>


            </div>

            <div className='row ml-3  bg-light mt-3' >

                <div className='col-3 weight '>
                    <p>75<small>kg</small></p>
                </div>
                <div className='col-3 weight'>
                    <p>75<small>kg</small></p>
                </div>
                <div className='col-3 weight'>
                    <p>75<small>kg</small></p>
                </div>

            </div>
            <h4 className='mt-3'>Add a break</h4>

            <div className='row  bg-light'>

                <div className='col-2 w-auto'>
                    <p className=' button-click' onClick={() => timeClick(10)}>10s</p>
                </div>

                <div className='col-2  w-auto'>
                    <p className=' button-click' onClick={() => timeClick(20)}>20s</p>
                </div>

                <div className='col-2 w-auto'>
                    <p className=' button-click' onClick={() => timeClick(30)}>30s</p>
                </div>

                <div className='col-2  w-auto'>
                    <p className=' button-click' onClick={() => timeClick(40)}>40s</p>
                </div>

                <div className='col-2 w-auto'>
                    <p className=' button-click' onClick={() => timeClick(50)}>50s</p>
                </div>
            </div>






            <h5>Selected  Card : {activityCard.length}</h5>
            <h4>Exercise Details</h4>
            <div className='d-flex ml-3 time-boundary bg-light'>
                <p>Exercise time :</p>
                <p className='margine-handel'>{totalTime}</p>
            </div>

            <div className='d-flex ml-3 time-boundary bg-light mt-3'>
                <p>Break time :</p>
                <p className='margine-handel'>{activityTime}</p>
            </div>


        </div>
    );
};

export default Card;