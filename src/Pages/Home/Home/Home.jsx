import React from 'react';
import Banner from '../Banner/Banner';
import Teachers from '../Teachers/Teachers';
import ClassDemo from '../ClassDemo/ClassDemo';
import Section from '../Section/Section';

const Home = () => {
    return (
        <div>
            <Banner />
            <Teachers />
            <ClassDemo />
            <Section />
        </div>
    );
};

export default Home;