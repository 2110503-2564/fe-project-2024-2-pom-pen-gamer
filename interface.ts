<<<<<<< HEAD
export interface RestaurantItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    region: string,
    opentime : string,
    closetime : string,
    picture: string,
    __v: number,
    id: string
  }
  
 export interface RestaurantJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[]
  }

  export interface ReservationItem {
    user:{
        _id: string; 
        name: string;
        email: string;
    }
    restaurant: {
        _id: string; 
        name: string;
      };
    reservationDate: string;
    status : string;
    createdAt : Date;
  }

  export interface User {
    _id: string;
    name: string;
    telnumber: string;
    email: string;
    role: string;
    password : string;
    createdAt : Date;
    __v: number;
    id: string;
  }
||||||| d949766
=======
export interface RestaurantItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    region: string,
    opentime : string,
    closetime : string,
    picture: string,
    __v: number,
    id: string
  }
  
 export interface RestaurantJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[]
  }

  export interface ReservationItem {
    user:{
        _id: string; 
        name: string;
        email: string;
    }
    restaurant: {
        _id: string; 
        name: string;
      };
    reservationDate: string;
    status : string;
    createdAt : Date;
  }

  export interface User {
    _id: string;
    name: string;
    telnumber: string;
    email: string;
    role: string;
    password : string;
    createdAt : Date;
    __v: number;
    id: string;
  }
>>>>>>> 85258f3f50fcc37f88fab7fd2f02bcca417895b6
