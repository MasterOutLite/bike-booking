import {BicycleType, BicycleStatusType, IBicycleForm, StatisticsType} from "../type";

export const URL = 'http://localhost:5000/api/'

export async function send(url?: string, init?: RequestInit) {
    const res = await fetch(URL + url, init);
    if (res.status === 404)
        throw Error(`Bad request by url: ${res.url}.
        Type: ${res.type}.
        Status: ${res.status} , ${res.statusText}.
        Message: ${JSON.stringify(await res.json())}.`)

    return await res.json();
}

export async function getBicycle() {
    return await send('bicycle') as BicycleType[];
}

export async function getBicycleStatus() {
    return await send('bicycleStatus') as BicycleStatusType[];
}

export async function getStatistics() {
    return await send('bicycle/statistics') as StatisticsType

}

export async function postBicycle(data: IBicycleForm) {
    return await send('bicycle', {
        method: 'post', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export async function putBicycle(id: string, status: string) {
    return await send('bicycle', {
        method: 'put', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, status})
    });
}

export async function deleteBicycle(id: string) {
    return await send('bicycle', {
        method: 'delete', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    });
}
