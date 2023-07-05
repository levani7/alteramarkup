import React, {useRef} from 'react';
import Layout from "../../components/Layout/Layout";
import NameCompany from './NameCompany'
import NewDepartment from './NewDepartment'
import TableListName from './TableListName'
import Table from './Table'

const App = () => {
    return (
        <Layout>
            <div className=' flex items-center space-x-[30px] pt-9 pr-[15px]'>
                <NameCompany/>
                <NewDepartment/>
            </div>
            <div className=' pt-[40px]'>
                <TableListName/>
            </div>
                <Table/>
        </Layout>
    );
};

export default App;
