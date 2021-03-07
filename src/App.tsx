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
                <div className="wrapper">
                    <div className="center">
                        <ShowElement/>
                    </div>
                </div>
                <div className="left">
                    <EditPage/>
                    <AddElement/>
                </div>

                <div className="right">
                    <h3>元素操作</h3>
                    <DeleteElement/>
                    <ChangeElement/>
                </div>

            </div>

        </TopProvider>

    );
}

export default App;
