import { getSudoku } from 'sudoku-gen';

/**
 * 
 * @param {string} puzzleString - SudokuGen's return value,
 * a puzzle represented as a string with either numbers or 
 * @returns 
 */
function convertPuzzle(puzzleString) {
    // Return an empty grid if library doesn't work
    if (!puzzleString || puzzleString.length !== 81) {
        console.error("Invalid puzzle string returned:", puzzleString);
        return Array.from({ length: 9 }, () =>
            Array.from({ length: 9 }, () => ({ value: '', isEditable: true, notes: [] }))
        );
    }

    const grid = [];
    for(let i = 0; i < 9; i++) {
        const row = [];
        for(let j = 0; j < 9; j++) {
            const index = i * 9 + j;
            const ch = puzzleString.charAt(index);
            row.push({
                value: ch === '-' ? '' : ch,
                isEditable: ch === '-', /* Editable if the cell is empty */
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
    const sudoku = getSudoku(difficulty);
    return convertPuzzle(sudoku.puzzle);
}