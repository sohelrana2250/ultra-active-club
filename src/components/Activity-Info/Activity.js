import React from 'react';
import './Activity.css'

const Activity = (props) => {

    const { title, Information, img, age, time } = props.data;
    const { handelAddActivity } = props;


    return (
        <div className='product'>

            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{title}</h4>
                <p>{Information.slice(0, 100)}</p>
                <p>For Age : {age}</p>
                <p>time Required :{time} s</p>
            </div>

            <button className='button-card'><p onClick={() => handelAddActivity(props.data)}>Add To List</p></button>


        </div>
    );
};

export default Activity;