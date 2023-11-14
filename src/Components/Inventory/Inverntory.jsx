import { useEffect, useState } from 'react';
import Car from './Car';

const Inverntory = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/car')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const handleClicked = (e) => {
        e.preventDefault();
        const nissan = e.target.nissan.checked ? e.target.nissan.value : null;
        const MG = e.target.MG.checked ? e.target.MG.value : null;
        console.log(nissan, MG);
        if (!(nissan === null)) {
            console.log('hello');
        }
    }

    return (
        <div className='flex'>
            <div className='w-2/3 space-y-2'>
                {
                    cars.map(car => <Car key={car.name} elements={car}></Car>)
                }
            </div>
            <div className='w-1/3 h-[800px] bg-slate-500'>
                <form onSubmit={handleClicked}>
                    <label htmlFor="nissan">Nissan</label>
                    <input type="checkbox" name="nissan" value="nissan" id="nissan" />
                    <label htmlFor="MG">MG</label>
                    <input type="checkbox" name="MG" value="MG" id="MG" />
                    <button type='submit'>submit</button>
                </form>

            </div>
        </div>
    );
};

export default Inverntory;