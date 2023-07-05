import React, {useRef} from 'react';
import Layout from "../../components/Layout/Layout";
import FiltersBar from './FiltersBar'
import Table from './Table'
import SearchBarside from './SearchBarside'
import NewVacansi from './NewVacansi'
import NumberOfVacansi from './NumberOfVacansi'

const App = () => {
    return (
        <Layout>
            <h1 className='pt-[20px] font-extrabold text-[26px]'>პოზიციები</h1>
            <div className='flex w-full justify-between flex-wrap pr-5 pt-9'>
                <NumberOfVacansi/>
                <SearchBarside/>
                <NewVacansi/>
            </div>
            <div className=' pt-[40px]'>
                <FiltersBar/>
            </div>
            <div className='pr-3'>
                <Table/>
            </div>
        </Layout>
    );
};

export default App;
