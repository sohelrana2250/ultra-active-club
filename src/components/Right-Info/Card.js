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

    }


    const getItem = getItemActivity()

    useEffect(() => {


        for (const id in getItem) {

            setActivityTime(getItem[id].time);



        }

    }, [getItem])



    return (
        <div>
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
                        <p>75<small>kg</small><br /><small>Weight</small></p>

                    </div>
                    <div className='col-3 weight'>
                        <p>5.6<small> lnch</small><br /><small>Height</small></p>
                    </div>
                    <div className='col-3 weight'>
                        <p>19<small>yrs</small><br /><small>Age</small></p>
                    </div>

                </div>
                <h4 className='mt-3 text-center '>Add a break.</h4>

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






                <h5 className='text-center mt-3'>Selected Activity  : {activityCard.length}</h5>
                <h4 className='text-center mt-3'>Exelassrcise Details</h4>
                <div className='d-flex ml-3 time-boundary bg-light'>
                    <p>Exercise time :</p>
                    <p className='margine-handel'>{totalTime}</p>
                </div>

                <div className='d-flex ml-3 time-boundary bg-light mt-3'>
                    <p>Break time :</p>
                    <p className='margine-handel'>{activityTime}</p>
                </div>

                <div className='mt-3 text-center'>

                    <button type="button" className="btn btn-outline-danger btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                        Activity Completed
                    </button>


                </div>




            </div>

            <div>



                <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fs-2 text-center" id="staticBackdropLabel">Congratulations</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5>you football daily activity completed</h5>
                                <p>Today Your Selecte Activity :{activityCard.length}</p>
                                <p>Today your Activity : {totalTime} s</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Card;