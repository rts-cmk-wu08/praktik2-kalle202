export type HomeType = {
    energylabel: string;
    type: string;
    images: images[];
    gross: number;
    payment: number;
    price: number;
    city: string;
    cost: number;
    basementsize: number;
    lotsize: number;
    netto: number;
    postalcode: number;
    rooms: string;
    adress1: string;
    livingspace: number;
    built: number;
    floorplan: {

    };
    description: string;
    lat: number;
    long: number;
    agent: {

    }
    users: []
    id: string;
}

type images = {
    name: string;
    url: string;
}