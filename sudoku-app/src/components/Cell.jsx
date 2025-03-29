import React, { useState } from 'react';
import './Cell.css';

/**
 * Components are functions that return JSX - a JSX element is a combination of JS
 * and HTML tags. This is a functional component, representing one individual
 * cell/square in the puzzle.
 * 
 * value - current displayed value
 * isEditable & isNotesMode - booleans
 * onChange - callback function for when value changes
 * onSelect - callback function for when cell is selected
 * notes - array of notes
*/ 
const Cell = ({ value, isEditable, isNotesMode, onChange, isSelected, onSelect, notes }) => {

    /**
     * - creates an inputValue variable WITH STATE, setting it to the value parameter 
     * if it was passed in, else just '' (empty square)
     * - creates a setInputValue function, which when called will only take one
     * parameter - the new value of inputValue, and SAVE STATE
     */
    const [inputValue, setInputValue] = useState(value || '');
    const [cellNotes, setCellNotes] = useState(notes || []);

    /**
     * Triggered by the data structure's onChange -- grabs user input,
     * checks if it is a valid input, checks if notes mode is on, and then 
     * changes the "backend" representation of the Cell' value correspondingly
     */
    const handleInputChange = (e) => {
        /**
         * e, the event object, stores user input here.
         * 
         * target is the DOM element that triggered the event (ex. an input)
         * value is the current content of the input field
         * 
        */
        const input = e.target.value;

        if(isNotesMode) {
            if(input >= '1' && input <= '9' && !cellNotes.includes(input)){
                // no append function - must use spread operator
                setCellNotes([...cellNotes, input].sort());
            }
        } else {
            if(input === '' || (input >= '1' && input <= '9')) {
                setInputValue(input);
                onChange(input);
            }
        }
    };

    const handleFocus = () => { onSelect(); };

    return (
        <div
            /**
             * Main container for the cell - sets class name based on if
             * the Cell is editable and/or selectable to allow easy styling
             * in a CSS file!
             */
            className={`cell ${isEditable ? 'editable' : ''} ${isSelected ? 'selected' : ''}`}
            onClick={handleFocus}
        >
            {isNotesMode && isEditable ? ( // ternary operator!
                <div className='notes'>
                    {cellNotes.map((note) => (
                        /**
                         *  <span>s are inline elements which can be styled uing
                         * CSS to appear smaller and in a grid! :)
                        */
                        <span key={note} className='note'>{note}</span>
                    ))}
                </div>
            ) : ( // render for direct entry
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    maxLength='1'
                    className='cell-input'
                />
            )}
        </div>
    );
};

export default Cell;