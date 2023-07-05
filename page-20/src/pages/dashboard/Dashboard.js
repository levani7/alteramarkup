import React, {useRef} from 'react';
import Layout from "../../components/Layout/Layout";
import FiltersBar from './FiltersBar'
import Table from './Table'
import SearchBarside from './SearchBarside'
import NewVacansiButton from './NewVacansiButton'
import NumberOfVacansi from './NumberOfVacansi'

const App = () => {
    return (
        <Layout>
            <h1 className='pt-[20px] font-extrabold text-[26px]'>ვაკანსიები</h1>
            <div className='flex w-full justify-between flex-wrap pr-5 pt-9'>
                <NumberOfVacansi/>
                <SearchBarside/>
                <NewVacansiButton/>
            </div>
            <div className=' pt-[40px]'>
                <FiltersBar/>
            </div>
            <div className='pr-3 pt-5'>
                <Table/>
            </div>
        </Layout>
    );
};

export default App;
