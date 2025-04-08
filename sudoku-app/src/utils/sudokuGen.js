import {getSudoku} from 'sudoku-gen';

/**
 * 
 * @param {string} puzzleString - SudokuGen's return value,
 * a puzzle represented as a string with either numbers or 
 * @returns 
 */
function convertPuzzle(puzzleString) {
    const grid = [];
    for(let i = 0; i < 9; i++) {
        const row = [];
        for(let j = 0; j < 9; j++) {
            const index = i * 9 + j;
            const ch = puzzleString.charAt(index);
            row.push({
                value: value,
                isEditable: value === '-', /* Editable if the cell is empty */
                notes: []
            });
        }
        grid.push(row);
    }
    return grid;
}

/**
 * Generates a Sudoku using NPM's SudokuGen library.
 * @param {string} difficulty - A string indicating difficulty.
 * ('easy', 'medium', 'hard', or 'expert')
 * @returns {Array} A 9x9 grid where each cell is an object.
 */
export function generatePuzzle(difficulty = 'medium') {
    return convertPuzzle(getSudoku(difficulty));
}