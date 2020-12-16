import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Routes from './components/Routes';
import Header from './components/Header';
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among Engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shae of Blue',
        value: 'blue'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
        <Header />
        <Routes path = "/">
            <Accordion items = {items} />
        </Routes>
        <Routes path = "/list">
            <Search />
        </Routes>
        <Routes path = "/dropdown">
            <Dropdown 
                label="Select a color"
                options = {options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </Routes>
        <Routes path = "/translate">
            <Translate />
        </Routes>
        </div>
    );
};

export default App;