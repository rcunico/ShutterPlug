import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomHome.css";
import CarouselSP from "./CarouselSP";
// import ContactUs from "./ContactUs";
// import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { createRequireFromPath } from "module";


class Home extends Component {
    constructor () {
    super()    
 /*   this.state= {
        isHidden1: true, //hides the text until button is clicked
        isHidden2: true,
        moveButton1: true, //to move the button location
        moveButton2: true
    }*/
}

    /*toggleHidden1 () {
        this.setState({
            isHidden1: !this.state.isHidden1,
        })
    }*/

    /*toggleHidden2 () {
        this.setState({
            isHidden2: !this.state.isHidden2
        })
    }*/
    render() {
        return (
            <div className="body card mb-3">
                <div className = "card-header">
                    <h1>Welcome to Shutter Plug</h1>
                    <p>
                        Let us help you find the professional you are looking for!
                    </p>
                </div>    
                <div className = "card-body">     
                    <div>
                        <CarouselSP/>
                    </div>   
                </div>
                <div className = "text-center px-4"> 
                    <h3 className="font-weight-bolder px-2 text-center">
                        About Shutter Plug
                    </h3> 
                    {/* <h5 className = "about text-center mb-2"> */}
                    <h5 className="mb-5">
                        Shutter Plug helps to promote competition for photographers and
                        help new professionals become successful in today's market.
                     </h5>
                </div>
                <div className = "img-fluid mb-5">
                    <img src ={require("../../assets/carousel_photo_4.jpg")} width="100%" height="100%" alt=""/>    
                </div>
                <div className="text-center px-2">
                    <h4>Have questions, offer feedback, or would like to report a bug?{"\n"}</h4>
                    <div className = "text-center px-3">
                        {/* <h5><a href="mailto:cconnersillustrations@hotmail.com">Contact Shutter Plug!</a></h5> */}
                        {/* Changed to Shutter Plug Developers email */}
                        <h5><a href="mailto:shutterplugdevelopers@gmail.com">Contact Shutter Plug!</a></h5>
                    </div>
                </div>           
            </div>
        )
    }
}
/*const ShowShutText = () => (
    <div className="text-left px-2">
        There are several Apps out there that help Photographers book jobs, but they have limited advertising 
        and they also take a fluctuating percentage of each job booked through their 
        App. ShutterPlug is different from these Apps because we do not make money 
        off of jobs or handle the money exchanges between the photographer and the 
        client. We are about helping people connect, we create the PLUG for businesses 
        and photographers in the community to join forces and support each other. With 
        the creation of Shutter Plug we can put more community photographers on the map 
        therefore creating more competition in the market place. An average shoot in our 
        community costs upwards of $400 for one hour. Parents are paying over $50 twice a 
        year for a one pose photo of their child with horrible dated backdrops and over edited 
        prints provided by the overpriced out dated companies. We live in a community that needs 
        more diverse photo competition to help balance the big companies that have contracts with 
        all the schools, sports organizations, and cooperate businesses. Shutter Plug can help 
        lead our communities toward an easier, cost effective, and more efficient way to collaborate 
        with photographers and videographers in the same area. Together with Shutter Plug we can 
        grow local businesses and create a higher level of community interaction. 
    </div>
)*/

/*const ShowShutText2 = () => (
    <div className="text-left px-2">
         <p className = "text-left px-2">
            And year after year I have been faced with the same question by my graduating classes,
            “ Now what do we do with our photography? How are we supposed to find jobs without the help of
            Grayson Tech?”
        </p>
        <p className = "text-left px-2">
            I taught them how to create contracts, secure internships, make websites, and self- promote, but how
            do they connect to potential clients now that they are no longer my students?
        </p>
        <p className = "text-left px-2">
            Shutter Plug was born:
        </p>
        <p className = "text-left px-2">
            It was from the frustrations of my young entrepreneurs and my desperate need to help them as they
            began their journey after High School that Shutter Plug was born. Not just to help my former students,
            but to help everyone in the community that was constantly coming to me for photographers and didn’t
            know where to find them.
        </p>
        <p className = "text-left px-2">
            I have been approached by: fashion designers, Etsy shop owners, motivational speakers, sports
            organizations, PTSA Presidents, salon owners, makeup artists, automotive detailers, restaurants,
            bakeries, interior designers, real estate businesses, music producers, publicists, and so many more
            individuals that are in need of talented photographers.
        </p>
        <p className = "text-left px-2">
            Shutter Plug can help all these people connect and create a community of collaboration that Atlanta and
            the metro area needs!
        </p>
    </div>
)*/

export default Home;