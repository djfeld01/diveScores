import useLongPress from '../components/UseLongpress';
import React from 'react';

export default function App() {
    const [display, setDisplay]= React.useState('Not Pressed Yet')

    const onLongPress = () => {
        setDisplay('Long press')
        console.log('longpress is triggered');
    };

    const onClick = () => {
        setDisplay ('Just a Click')
        console.log('click is triggered')
    }

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

    return (
        <div className="App">
            <button {...longPressEvent}>use  Loooong  Press</button>
            <div>{display}</div>
        </div>
    );
}
