import React from 'react';
import './car.css'

const Car = ({ elements }) => {
    const { name, image, car_type, mileage_city, fuel_type, category, description, price } = elements
    return (
        <section className='flex'>
            <div className='flex border border-black p-5 space-x-4'>
                <section className='flex justify-between w-5/6'>
                    <div>
                        <img className='h-56' src={image} alt="" />
                    </div>
                    <div className='px-5 space-y-5 w-4/6 '>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-2xl'>{name}</h1>
                            <div className='card-price'>{price}</div>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                    </div>
                </section>
                <section className='w-[200px] space-y-5'>
                    <h1 className='px-5 py-5 bg-slate-200'>Mileage: {mileage_city}</h1>
                    <h1 className='px-5 py-5 bg-slate-200'>Fuel: {fuel_type}</h1>
                    <h1 className='px-5 py-5 bg-slate-200'>Car type: {car_type}</h1>
                </section>
            </div>
        </section>
    );
};

export default Car;