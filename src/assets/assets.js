// assets/assets.js

import navbar_right from './Icons/navbar_right.svg';
import logo from './Icons/indiapost_logo.svg';
import aboutBanner from './banners/about_hero.jpg';
import call from './Icons/bxs_phone-call.svg';
import location from './Icons/carbon_location-filled.svg';
import mail from './Icons/ic_sharp-email.svg';
import stamp1 from './stamps/1.jpeg';
import stamp2 from './stamps/2.jpeg';
import stamp3 from './stamps/3.jpeg';

// List of states and Union Territories
export const statesAndUTs = [
   "Andhra Pradesh",
   "Arunachal Pradesh",
   "Assam",
   "Bihar",
   "Chhattisgarh",
   "Goa",
   "Gujarat",
   "Haryana",
   "Himachal Pradesh",
   "Jharkhand",
   "Karnataka",
   "Kerala",
   "Madhya Pradesh",
   "Maharashtra",
   "Manipur",
   "Meghalaya",
   "Mizoram",
   "Nagaland",
   "Odisha",
   "Punjab",
   "Rajasthan",
   "Sikkim",
   "Tamil Nadu",
   "Telangana",
   "Tripura",
   "Uttar Pradesh",
   "Uttarakhand",
   "West Bengal",
   "Andaman and Nicobar Islands",
   "Chandigarh",
   "Dadra and Nagar Haveli and Daman and Diu",
   "Lakshadweep",
   "Delhi",
   "Puducherry",
   "Ladakh",
   "Jammu and Kashmir"
];

// List of cities by state
export const cities = {
   "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Tirupati"],
   "Arunachal Pradesh": ["Itanagar", "Tawang", "Bomdila"],
   "Assam": ["Guwahati", "Silchar", "Dibrugarh"],
   "Bihar": ["Patna", "Gaya", "Bhagalpur"],
   // Add other states and their cities here
   "Delhi": ["New Delhi", "Delhi"]
};

// Export assets
const assets = {
   navbar_right,
   logo,
   aboutBanner,
   call,
   location,
   mail,
   stamp1,
   stamp2,
   stamp3
};

export default assets;
