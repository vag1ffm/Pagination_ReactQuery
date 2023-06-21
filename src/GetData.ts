import axios from "axios";
import {ICoin, IRootObject} from "./models/models";

export default async function GetData(skip:number):Promise<ICoin[]> {
    const {data} = await axios.get<IRootObject>(`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10&currentcy=EUR`)
    return data.coins
}