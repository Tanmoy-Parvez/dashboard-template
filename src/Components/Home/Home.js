import React from 'react';
import homeLogo from '../../Images/welcome-homepage.png'


const Home = () => {
    return (
        <div className="flex justify-center mt-24">
            <img src={homeLogo} alt="" width="800px" />
        </div>
    );
};

export default Home;