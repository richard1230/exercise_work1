import React from 'react';
import './App.css';
import {TopProvider} from "./Context";
import EditPage from "./functions/EditPage";
import AddElement from "./functions/AddElement";
import ShowElement from "./functions/ShowElement";
import DeleteElement from "./functions/DeleteElement";
import ChangeElement from "./functions/ChangeElement";

function App() {
    return (
        <TopProvider>
            <div className="App">
                <div className="wrapper">

                    <div className="left">
                        <EditPage/>
                        <AddElement/>
                    </div>
                    <div className="center">
                        <ShowElement/>
                    </div>
                    <div className="right">
                        <h3>元素操作</h3>
                        <DeleteElement/>
                        <ChangeElement/>
                    </div>
                </div>

            </div>

        </TopProvider>

    );
}

export default App;
