import React, {useRef} from 'react';
import Layout from "../../components/Layout/Layout";
import Table from './Table'
import TableListName from './TableListName';
import NameCompany from './NameCompany';



const App = () => {
    return (
        <Layout>
            <div className=' flex w-full justify-between flex-wrap pr-5 pt-9'>
                <NameCompany/>
            </div>
            <div>
                <div className=' pt-[40px]'>

                <TableListName/>
                </div>
                <div className='pt-[27px] pr-5'>
                    <Table/>
                </div>
            </div>
        </Layout>
    );
};

export default App;
