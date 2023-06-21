import React from 'react';
import {Table} from "react-bootstrap";
import {ICoin} from "./models/models";

interface CoinTableProps {
    data: ICoin[] | undefined;
}

// @ts-ignore
const CoinTable: React.FC<CoinTableProps> = ({data}) => {

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>N</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {
                data?.map((obj:ICoin, index) => (
                    <tr key={index}>
                        <td>{obj.rank}</td>
                        <td>
                            <img
                                src={obj.icon}
                                width={20}
                                style={{marginRight: 10}}
                                alt={'Coin'}
                            />
                            {obj.name}
                        </td>
                        <td>
                            ${obj.price}
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
};

export default CoinTable;