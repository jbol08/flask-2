function starOutGrid(grid) {
    const row = grid[0].length;
    const column = Array(row).fill(false);

    grid.forEach(rows => {
        rows.forEach((columns, i) => {
            if (columns === '*') {
                column[i] = true;
            }
        });
        if (rows.includes('*')) {
            for (let i = 0; i < row; i++) {
                rows[i] = '*';
        
            }
        }
    });
    column.forEach((columns, i) => {
        if (columns) {
            grid.forEach(rows => {
                rows[i] = '*';
            });
        }
    });
    return grid;
};