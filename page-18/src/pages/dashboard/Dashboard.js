import React, {useRef} from 'react';
import Layout from "../../components/Layout/Layout";
import PreviousPage from './PreviousPage';
import AddForm from './AddForm';


const App = () => {
    return (
        <Layout>
            <div className=' pl-5 pt-9 space-y-[60px] '>

                <PreviousPage/>
                
                <div className=' flex justify-center '>
                    <AddForm/>
                </div>
            </div>
            
        </Layout>
    );
};

export default App;
