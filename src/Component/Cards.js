import React, { useEffect, useState } from 'react'
import { Card, Spinner, CardGroup } from 'react-bootstrap'
import axios from 'axios'
import './cards.css'


function Cards() {

    const [data, setData] = useState([])
    const [spin, setSpin] = useState(false)

    useEffect(() => {
        setSpin(true)
        axios.get('http://localhost:3000/fetch/data').then(resp => {
            console.log(resp.data);
            setData(resp.data)
        })
        setSpin(false)

    }, [])


    //     {spin ? <Spinner animation="border" /> :
    // }
    return (
        <div>
            <div className="container" style={{ border: "1px solid black" }} >
                <div className="row" >
                    {
                        data.map((data1, idx) => {
                            return (
                                <Card border="primary" style={{ width: "350px", margin: "2%" }} >
                                    <Card.Body>
                                        <Card.Title>{data1.movie_name}</Card.Title>
                                        <Card.Text>
                                            rating: {data1.rating}<br />
                                            Release Date:{data1.release_date}

                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Cards
