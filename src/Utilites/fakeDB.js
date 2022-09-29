

const setItemActivity = (time) => {

    let activityTime = {};

    activityTime[Date.now()] = { time };

    localStorage.setItem('activity-time', JSON.stringify(activityTime));
    window.location.reload();


}

const getItemActivity = () => {

    const stortedActivity = localStorage.getItem('activity-time');
    const ActivityInfo = {}

    if (stortedActivity) {

        const ActivityInfo = JSON.parse(stortedActivity);

        // console.log(ActivityInfo)

        return ActivityInfo;
    }
    else {
        return ActivityInfo;
    }




}

//getItemActivity()


export {
    setItemActivity,
    getItemActivity
}
