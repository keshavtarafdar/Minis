# DokuTail

## Event Flow
1. A user selects a grid Cell
2. They choose a value
3. Cell's onChange triggers handleInputChange, which validates user input, checks if notes mode is on or not, and then sets the "backend" representation of value
4. SudokuGrid's onChange triggers handleCellChange, which loops through the grid and re-renders the changed Cell. (sets "frontend" representation of value)