import React from 'react';
import './App.css';
import {TopProvider} from "./Context";
import EditPage from "./compoents/EditPage";
import AddElement from "./compoents/AddElement";
import ShowElement from "./compoents/ShowElement";
import DeleteElement from "./compoents/DeleteElement";
import ChangeElement from "./compoents/ChangeElement";

function App() {
    return (
       <TopProvider>
           <div className="App">
               {/*<div className="container-fluid">*/}
               {/*    <div className="left-center-right">*/}
               {/*   <div className="left">*/}
               {/*    /!*<div className='row'>*!/*/}
               {/*        /!*<div className='col-xs-2'>*!/*/}
               {/*            <EditPage />*/}
               {/*            /!*<hr/>*!/*/}
               {/*            <AddElement/>*/}
               {/*        /!*</div>*!/*/}
               {/*    /!*</div>*!/*/}
               {/*    </div>*/}
                   <div className="wrapper">
                       <div className="center">
                           <ShowElement/>
                       </div>
                   </div>
               <div className="left">
                   {/*<div className='row'>*/}
                   {/*<div className='col-xs-2'>*/}
                   <EditPage />
                   {/*<hr/>*/}
                   <AddElement/>
                   {/*</div>*/}
                   {/*</div>*/}
               </div>

                      <div className="right">
                          {/*<div className='col-xs-4 text-left'>*/}
                              <h3>元素操作区</h3>
                              <DeleteElement />
                              <ChangeElement />
                          {/*</div>*/}
                      </div>

               {/*</div>*/}
             {/*</div>*/}
               {/*</div>*/}
           </div>

       </TopProvider>

    );
}

export default App;
