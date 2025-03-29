import React, { useState } from 'react';
import Cell from './Cell';

/**
 * Displays the current state of the puzzle, a 9x9 grid of Cells.
 * 
 * grid - array of Cells
 * isSolved - boolean
 * onChange - callback function for when grid changes
*/ 
const SudokuGrid = ({ grid, isSolved, onChange }) => {

    // create variables and their default values
    const [grid, setGrid] = useState(initialGrid);
    const [selectedCell, setSelectedCell] = useState(null);
    const [isNotesMode, setIsNotesMode ] = useState(false);

    // initialize a data structure to store the 9x9 grid of empty Cells
    const initializeGrid = Array.from({ length: 9 }, () =>
        Array.from({ length: 9 }, () => ({ value: '', isEditable: true, notes: [] }))
    );

    const handleCellChange = (e) => {
        const newGrid = grid.map((r, rowIndex) =>
            r.map((cell, colIndex) => {
                if (rowIndex === row && colIndex === col) {
                    return { ...cell, value: newValue };
                }
                return cell;
            })
        );
        setGrid(newGrid);
    };

};