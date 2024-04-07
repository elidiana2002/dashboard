import React from 'react';
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <div className="logo">Endpoints</div>
                <ul className="menu">
                    <li id='green'>ENDPOINT1 127.0.0.1 Stare (200)</li>
                    <li id='green'>ENDPOINT2 127.0.0.2(200)</li>
                    <li id='yallow'>ENDPOINT3 127.0.0.3(302)</li>
                    <li id='red'>ENDPOINT4 127.0.0.14(400)</li>
                </ul>
            </div>
            <div className="content">
                <header className="header">
                    <h1>Click here to report a bug</h1>
                </header>
                <div className="main-content">
                    {/* Your main content goes here */}
                    
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
