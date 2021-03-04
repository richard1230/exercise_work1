import React from 'react';
import './App.css';
import {AppProvider} from "./Context";

function App() {
    return (
       <AppProvider>
           <div className="App">
               <div className="left-center-right">
                   <div className="left">
                       <button >
                           添加文字
                       </button>
                       <button>
                           添加图片
                       </button>
                   </div>

                   <div className="center">
                       文本区
                   </div>

                   <div className="right">
                       右边
                   </div>
               </div>
           </div>
       </AppProvider>

    );
}

export default App;
