import React, { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import './Home.css';

const url = 'https://zillow-com-api.p.rapidapi.com/search_property?region_ids=54047&currentPage=1';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd95ebbc835mshf0e63ed83513e45p18dc89jsnd4b76f017221',
        'X-RapidAPI-Host': 'zillow-com-api.p.rapidapi.com'
    }
};

const Home: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setData(result.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        // fetchData();
    }, []);
    return (
        <div className="card">
            {loading ? (
                <div className="loading-content">
                    <RotatingLines
                        visible={true}
                        height="96"
                        width="96"
                        color="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : (
                 data?.results?.map((item: any, index: number) => (
                    <div className="card-inner">

                        <div className="img-container">
                            <img src={item.imgSrc} style={{ height: "400px", width: "100%", borderRadius: "25px" }} />
                        </div>
                        <div className="container-content">
                            <p><span style={{ marginRight: "20px" , fontWeight:"bold"}}>Status-</span>{item.statusType}</p>
                            <p><span style={{ marginRight: "20px" , fontWeight:"bold"}}>address-</span>{item.address}</p>
                            <p><span style={{ marginRight: "20px" , fontWeight:"bold"}}>addressStreet-</span>{item.addressStreet}</p>
                            <p><span style={{ marginRight: "20px" , fontWeight:"bold"}}>addresCity-</span>{item.addresCity}</p>
                            <p><span style={{ marginRight: "20px" , fontWeight:"bold"}}>addressState-</span>{item.addressState}</p>
                            <p><span style={{ marginRight: "20px" , fontWeight:"bold"}}>addressZipcode-</span>{item.addressZipcode}</p>
                            <p><span style={{ marginRight: "20px" , fontWeight:"bold"}}>beds-</span>{item.beds}</p>
                            <p><span style={{ marginRight: "20px" , fontWeight:"bold"}}>baths-</span>{item.baths}</p>
                            <p><span style={{ marginRight: "20px" , fontWeight:"bold"}}>area-</span>{item.area}</p>
                            <p><span style={{ marginRight: "20px" , fontWeight:"bold"}}>brokerName-</span>{item.brokerName}</p>
                            <p><span style={{ marginRight: "20px" , fontWeight:"bold"}}>price-</span>{item.price}</p>
                            <button style={{ color: "white" , borderRadius:"25px" , fontSize:"15px"}}>Book Now !</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Home;
