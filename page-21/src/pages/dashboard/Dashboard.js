import React, {useRef} from 'react';
import Layout from "../../components/Layout/Layout";
import AddCandidat from './AddCandidat';
import MoveForward from './MoveForward';

const App = () => {
    return (
        <Layout>
            <div className=' px-5 pt-9 space-y-[40px] '>
                    <MoveForward/>
                <div className=''>
                    <AddCandidat/>
                </div>
            </div>
            
        </Layout>
    );
};

export default App;
