export class Weather {
    constructor(public Title: string, public Icon: string, public Water: number, public Temperature: number){
    }
}

export class Social_Info {
    constructor(
        public title: string, 
        public img: string, 
        public followers: number, 
        public following: number){}
}

export class Place {
    constructor(
        public name: string,
        public imgUrl: string,
        public address: string,
        public phone: number,
        public type: string,
        public weather: Weather,
        public social: Social_Info){}
}

