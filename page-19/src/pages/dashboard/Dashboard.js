import React, {useRef} from 'react';
import Layout from "../../components/Layout/Layout";
import AddCandidat from './AddCandidat';
import Lists from './LIsts';


const App = () => {
    return (
        <Layout>
            <div className=' px-5 pt-9 space-y-[60px] '>

                <a href="#" className=' text-[#333333] text-[25px] pb-3 font-extrabold'>პარამეტრები</a>
                <Lists/>
                
                <div className=''>
                    <AddCandidat/>
                </div>
            </div>
            
        </Layout>
    );
};

export default App;
