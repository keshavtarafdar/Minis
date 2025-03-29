import React, { useState } from 'react';
import Cell from './Cell';
import './SudokuGrid.css';

/**
 * Displays the current state of the puzzle, a 9x9 grid of Cells.
 * 
 * grid - array of Cells
 * isSolved - boolean
 * onChange - callback function for when grid changes
*/ 
const SudokuGrid = () => {

    /**
     * Initialize a 2D array to store the 9x9 grid of empty Cells.
     * Each cell of the grid is an object with value, isEditable, 
     * and notes.
     * 
     * Array.from() used to create an array from an object with a 
     * length property. The first parameter acts like an array with
     * 9 empty slots, and the second parameter is a callback function
     * called for each of the 9 elements.
     * 
     * This nested call is creating an array of 9 rows with 9 Cells
     * in each row.
     *  */
    const initialGrid = Array.from({ length: 9 }, () =>
        Array.from({ length: 9 }, () => ({ value: '', isEditable: true, notes: [] }))
    );

    // create variables and their default values
    const [grid, setGrid] = useState(initialGrid);
    const [selectedCell, setSelectedCell] = useState(null);
    const [isNotesMode, setIsNotesMode ] = useState(false);

    /**
     * Updates a specific Cell in the grid. Triggered by user input
     * changing Cell value; loops through grid and re-renders the changed
     * Cell.
     * 
     * .map() iterates over an array, applies given function to each
     * element in that array, and then returns the resulting array.
     * It provides both the current value and index as arguments
     * passed to the callback function!
    */
    const handleCellChange = (row, col, newValue) => {
        const newGrid = grid.map((r, rowIndex) => // for each row
            r.map((cell, colIndex) => { // for each cell in the row
                if (rowIndex === row && colIndex === col) {
                    return { ...cell, value: newValue };
                }
                return cell;
            })
        );
        setGrid(newGrid);
    };
    
    // Sets currently selected Cell given row and col in grid
    const handleCellSelect = (row, col) => {
        setSelectedCell({ row, col });
    };

    const toggleNotesMode = () => {
        setIsNotesMode(!isNotesMode);
    };

    // Renders a Cell component for each element in the grid.
    return (
        <div className='sudoku-grid'>
            {grid.map((row, rowIndex) => ( // looping through rows
                <div className='row' key={rowIndex}>
                    {row.map((cell, colIndex) => ( // looping through cells of each row
                        /**
                         * For each cell, render a new Cell component -
                         * remember, we defined Cell as a functional 
                         * component! That's why this "constructor"
                         * looks like a function call.
                         */
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            value ={cell.value}
                            isEditable={cell.isEditable}
                            isNotesMode={isNotesMode}
                            onChange={(newValue) => handleCellChange(rowIndex, colIndex, newValue)}
                            onSelect={() => handleCellSelect(rowIndex, colIndex)}
                            isSelected={selectedCell?.row === rowIndex && selectedCell?.col === colIndex}
                            notes ={cell.notes}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SudokuGrid;