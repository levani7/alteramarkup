import React, {useRef} from 'react';
import Layout from "../../components/Layout/Layout";
import NameCompany from './NameCompany'
import NewDepartment from './NewDepartment'
import FiltersBar from './FiltersBar'
import Table from './Table'

const App = () => {
    return (
        <Layout>
            <div className=' flex items-center space-x-[30px] pr-3 pt-9'>
                <NameCompany/>
                <NewDepartment/>
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
