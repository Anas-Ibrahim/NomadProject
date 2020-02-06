import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="header">
            <div className="">
                <img src="./Images/Logo.png" style={{width: '50%'}}/>
            </div>
            <div className="" style={{textAlign: 'center'}}>
                <img src="Images/Search Icon.png" style={{width: '50%'}} />
            </div>
            <div className="" style={{textAlign: 'right'}}>
                <img src="Images/Menu Icon.png" style={{width: '50%'}} />
            </div>
        </div>

        <div className="Branding">
            <div className="Branding_Text">
                <div>Branding Do you</div>
                <div>know who you are</div>
            </div>

            <div className="Branding_Social">
                <div>
                    <img src="Images/240_F_285446979_Z8F7AKf7SImSo83AfpjauCYWka9cFfhf.jpg"
                        style={{width: 'auto', height: 'auto', maxWidth: '120px' , maxHeight: '93px'}} />
                </div>
            </div>
        </div>

        <div className="placeholder">
            <img src="Images/Placeholder.png" />
        </div>

        <div className="Below_Text">
            <div>The code they write runs inside the user’s browser (as opposed to a back end developer, whose code runs
                on the web server). Think of it a little like this: the back end developer is like the engineer who
                designs and creates the systems that make a city work (electricity, water and sewer, zoning, etc.),
                while the front end developer is the one who lays out the streets and makes sure everything is connected
                properly so people can live their lives (a simplified analogy, but you get the rough idea).</div>
        </div>

        <div className="Slideshow">
            <div>
                <img src="Images/Placeholder2.png" style={{width: 'auto', height: 'auto', maxWidth: '350px'}} />
            </div>
            <div>
                <img src="Images/Placeholder3.png" style={{width: 'auto', height: 'auto', maxWidth: '350px'}} />
            </div>
            <div>
                <img src="Images/Placeholder4.png" style={{width: 'auto', height: 'auto', maxWidth: '350px'}} />
            </div>
        </div>
        <div className= "Explore">
            <div className="Explore_Text">The code they write runs inside the user’s browser (as opposed to a back end developer, whose code runs
                on the web server). Think of it a little like this: Think of it a little like this: the back end developer is like the engineer who
                designs and creates the systems that make a city work.</div>
            <div className="Explore_Button">
                <img src="Images/explore_button1.png" style={{width: 'auto', height: 'auto', maxWidth: '100px'}} />
            </div>
        </div>

    </div>
  );
}

export default App;
