/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/outline';
import { CalendarIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline';
import flightData from '../searchFlights/seeds.js'

function profile() {
    const data = {
        hotels: [
            {
                'id': 115783,
                'name': 'Fairmont San Francisco',
                'starRating': 4.4,
                'image': 'https://exp.cdn-hotels.com/hotels/1000000/20000/18200/18200/48b0cc8d_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
                'address': {
                  'streetAddress': '950 Mason Street Atop Nob Hill',
                  'city': 'San Francisco',
                  'zip': '94108'
                },
                'pricePerNight': 307.2,
                'neighborhood': 'Nob Hill',
                'coordinates': {
                  'lat': 37.792404,
                  'lng': -122.410622
                }
              },
              {
                'id': 124533,
                'name': 'The Ritz-Carlton, San Francisco',
                'starRating': 4.6,
                'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/22200/22148/02842ca4_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
                'address': {
                  'streetAddress': '600 Stockton St',
                  'city': 'San Francisco',
                  'zip': '94108'
                },
                'pricePerNight': 450.48,
                'neighborhood': 'Downtown San Francisco',
                'coordinates': {
                  'lat': 37.791712,
                  'lng': -122.407436
                }
              },
              {
                'id': 141179,
                'name': 'Palace Hotel, San Francisco',
                'starRating': 4.4,
                'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/27300/27274/cb8526cf_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
                'address': {
                  'streetAddress': '2 New Montgomery St',
                  'city': 'San Francisco',
                  'zip': '94105'
                },
                'pricePerNight': 266.5,
                'neighborhood': 'Financial District',
                'coordinates': {
                  'lat': 37.788682,
                  'lng': -122.401919
                }
              }
        ]
    }

    const [hotels, setHotels] = useState(data.hotels);
    
    return (
        <>
            <div className="flex min-h-screen">
                <div className="w-64 bg-gray-50 border-r border-gray-200">
                <div className="mt-10 flex items-center ml-5">
                        <MenuIcon className="w-6 h-6 mr-2" />
                        <h3 className="mr-6 text-xs text-gray-600 uppercase tracking-widest">
                        
                            Dashboard
                        </h3>
                    </div>
                    <div className="mt-10 flex items-center ml-5">
                        <PaperAirplaneIcon className="w-6 h-6 mr-2" />
                        <h3 className="mr-6 text-xs text-gray-600 uppercase tracking-widest">
                        
                            Upcoming Flights
                        </h3>
                    </div>
                    <div className="mt-10 flex items-center ml-5">
                        <HomeIcon className="w-6 h-6 mr-2"/>
                        <h3 className="mr-6 text-xs text-gray-600 uppercase tracking-widest">
                            Saved Hotels
                        </h3>
                    </div>
                    <div className="mt-10 flex items-center ml-5">
                        <CalendarIcon className="w-6 h-6 mr-2"/>
                        <h3 className="mr-6 text-xs text-gray-600 uppercase tracking-widest">
                            Saved Events
                        </h3>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="my-10 text-4xl font-bold text-left ml-20">Dashboard</div>
                    <div className="mt-6 w-full px-20 justify-items-center">
                        <div className=" border rounded-lg bg-white shadow-lg overflow-hidden">
                            <div className="mt-10 text-2xl font-bold text-left ml-10">Your Upcoming Flights</div>
                            <div className="grid grid-cols-3 gap-4 py-10">
                                    
                                    {flightData.slice(0, 3).map(flight => (
                                        <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden py-5">
                                            <img className="airline-name h-8 mt-8 mx-auto" src={flight.thumbnail}/>
                                            <div className="time-airline m-4 font-bold">
                                            <span>{flight.departure} - {flight.arrive}</span><br />
                                            <span>{flight.airline}</span>
                                            </div>
                                            <div className="duration-airport mx-4 my-4">
                                            <span>{flight.duration}</span><br />
                                            <span>{flight.airports}</span>
                                            </div>
                                            <div className="stops mx-4 my-4">
                                            <span>{flight.stopNumber} stop</span><br />
                                            <span>{flight.stopsAirports}</span>
                                            </div>
                                            <div className="price mx-8 my-4">
                                            <span>${flight.price}</span><br />
                                            <span>{flight.type}</span>
                                            </div>
                                            <button className="mt-2 py-2 px-3 text-white bg-gray-400 hover:bg-gray-300 rounded" >View</button>
                                        </div>
                                    )
                                    )}
                                
                            </div>
                            <button className="py-2 px-3 text-white bg-black hover:bg-gray-600 rounded mb-10" >Show More</button>
                        </div>
                    </div>
                    <div className="mt-6 w-full px-20 justify-items-center">
                        <div className=" border rounded-lg bg-white shadow-lg overflow-hidden">
                            <div className="mt-10 text-2xl font-bold text-left ml-10">Your Hotels</div>
                            <div className="grid grid-cols-3 gap-4 py-10">
                                
                                    {hotels.map(hotel => (
                                        <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden py-5">
                                            <img className="mx-auto my-5 rounded-lg" src={hotel.image} alt={hotel.name}/>
                                            <div className="text-left mx-10 mt-5">
                                                <div className="text-lg font-bold">{hotel.name}</div>
                                                <div className="text-lg"> {hotel.address.streetAddress}, {hotel.address.city}, {hotel.address.zip}</div>
                                                <div className="text-lg">Price/night: ${hotel.pricePerNight}</div>
                                                <div className="text-lg">{hotel.neighborhood}</div>
                                                <div className="text-lg">Rating: {hotel.starRating}</div>
                                            </div>
                                            <button className="mt-2 py-2 px-3 text-white bg-gray-400 hover:bg-gray-300 rounded" >View</button>
                                        </div>
                                    )
                                    )}
                                
                            </div>
                            <button className="py-2 px-3 text-white bg-black hover:bg-gray-600 rounded mb-10" >Show More</button>
                        </div>
                    </div>
                    <div className="mt-6 w-full px-20 justify-items-center">
                        <div className=" border rounded-lg bg-white shadow-lg overflow-hidden">
                            <div className="mt-10 text-2xl font-bold text-left ml-10">Your Events</div>
                            <div className="grid grid-cols-3 gap-4 py-10">
                                
                                    {hotels.map(hotel => (
                                        <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden py-5">
                                            <img className="mx-auto my-5 rounded-lg" src={hotel.image} alt={hotel.name}/>
                                            <div className="text-left mx-10 mt-5">
                                                <div className="text-lg font-bold">{hotel.name}</div>
                                                <div className="text-lg"> {hotel.address.streetAddress}, {hotel.address.city}, {hotel.address.zip}</div>
                                                <div className="text-lg">Price/night: ${hotel.pricePerNight}</div>
                                                <div className="text-lg">{hotel.neighborhood}</div>
                                                <div className="text-lg">Rating: {hotel.starRating}</div>
                                            </div>
                                            <button className="mt-2 py-2 px-3 text-white bg-gray-400 hover:bg-gray-300 rounded" >View</button>
                                        </div>
                                    )
                                    )}
                                
                            </div>
                            <button className="py-2 px-3 text-white bg-black hover:bg-gray-600 rounded mb-10" >Show More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(profile);
