import React, { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import './Home.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const url = 'https://zillow-com-api.p.rapidapi.com/search_property?region_ids=54047&currentPage=1';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd95ebbc835mshf0e63ed83513e45p18dc89jsnd4b76f017221',
        'X-RapidAPI-Host': 'zillow-com-api.p.rapidapi.com'
    }
};

const Home = () => {
    const [data, setData] = useState<Hero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchdata = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setData(result);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        // fetchdata(); 
    }, []);

    interface Hero {
        id: string;
        imgSrc: string;
        statusType: string;
        price: string;
        address: string;
        addressZipcode: string;
        beds: number;
        baths: number;
        area: number;
        brokerName: string;
    }

    // if (loading) {
    //     return (
    //         <div className="loading-content">
    //             <RotatingLines
    //                 visible={true}
    //                 height="96"
    //                 width="96"
    //                 color="grey"
    //                 strokeWidth="5"
    //                 animationDuration="0.75"
    //                 ariaLabel="rotating-lines-loading"
    //                 wrapperStyle={{}}
    //                 wrapperClass=""
    //             />
    //         </div>
    //     );
    // }

    return (
        // <div className="card">
        //     {data&&data.cities.map&&data.cities.map((hero) => (
        //         <div className="card-compo" key={hero.city_id}>
        //             <li>{hero.city_id}</li>
        //             <li>{hero.city_name}</li>
        //             <li>{hero.country_name}</li>
        //         </div>
        //     ))}
        // </div>
        <div className="card">
            {data && data.map && data.map((hero) => (
                <div className="card-compo">
                    {hero.results.map((cur)=>{

                    <div className="img-cont">
                        <img src={cur.imgSrc}/>
                    </div>
                    })}
                </div>
             ))} 
        </div>
        // <div className="contain">
        //     <div className="flip-card">
        //         <div className="flip-card-inner">
        //             <div className="flip-card-front">
        //                 {/* <img src={hero.imgSrc} alt="Avatar" style={{ width: "300px", height: "300px" }} /> */}
        //             </div>
        //             <div className="flip-card-back">
        //                 <h1>John Doe</h1>
        //                 <p>Architect & Engineer</p>
        //                 <p>We love that guy</p>
        //                 <button onClick={gotoinfo}>Read more</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Home; 