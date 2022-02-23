import React from 'react';
import Header from './Header';
import Custom from './Custom';

let name = "Dark_COder";
let age = 25;

function App(){
    return <div>
        <Header />
        <Custom name={name} />
    </div>
}

export default App;