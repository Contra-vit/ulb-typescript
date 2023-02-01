import React, {useRef, useState} from 'react';
import {log} from "util";

const EventsExample = () => {
    const [value, setValue] = useState<string>();
    const [isDrag, setIsDrag] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag')
    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDrag(false)
    }


    return (
        <div>
            <input value={value} onChange={changeHandler} type='text' placeholder= 'rulled'/>
            <input  ref={inputRef} type='text' placeholder='unrulled'/>

            <button  onClick={clickHandler}> Press EventsExample </button>
            <div onDrag={dragHandler} draggable style={{width:'200px',  height: '200px', background: 'red' }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width:200,  height: 200, background: isDrag==true? 'blue':'green', marginTop: 20}}></div>

        </div>
    );
};

export default EventsExample;