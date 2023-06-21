import React, {useState} from 'react';
import './App.css';
import {useQuery} from "react-query";
import GetData from "./GetData";
import CoinTable from "./CoinTable";
import {ICoin} from "./models/models";
import {Button, Col} from "react-bootstrap";

function App() {

    const [page, setPage] = useState(10)
    const {data, isLoading, isError} = useQuery<ICoin[], Error>(
        ['coins', page],
        () => GetData(page),
        {
            keepPreviousData: true
        }
    )


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data.</div>;
    }

    return (
        <div className="App">
            <CoinTable
                data={data}
            />
            <Col className={'d-flex justify-content-center'}>
                <Button
                    className={'me-2'}
                    onClick={() => setPage((page) => page - 10)}
                    disabled={!page}
                >
                    <h5>Back</h5>
                </Button>
                <Button
                    onClick={() => setPage((page) => page + 10)}
                >
                    <h5>After</h5>
                </Button>
            </Col>
        </div>
    );
}

export default App;
