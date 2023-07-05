import React, {useRef} from 'react';
import Layout from "../../components/Layout/Layout";
import MoveForward from './MoveForward';
import Report from './Report';


const App = () => {
    return (
        <Layout>
            <div className=' pl-5 pt-9 space-y-[60px] '>

                <MoveForward/>
                
                <div className='  '>
                    <Report/>
                </div>
            </div>
            
        </Layout>
    );
};

export default App;
