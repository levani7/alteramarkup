import React, {useRef} from 'react';
import Layout from "../../components/Layout/Layout";
import Lists from './LIsts';
import AddFields from './AddFields';


const App = () => {
    return (
        <Layout>
            <div className='pr-4 pt-9 space-y-[29px]'>
                <h1 className=' text-[#333333] text-[22px] font-extrabold'>პარამეტრები</h1>
                <Lists/>
                <AddFields/>
            </div>
            
        </Layout>
    );
};

export default App;
