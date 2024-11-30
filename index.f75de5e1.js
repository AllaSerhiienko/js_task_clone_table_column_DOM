'use strict';
const table = document.querySelector('table');
const rows = [
    ...table.rows
];
rows.forEach((row)=>{
    const copy = row.cells[1].cloneNode(true);
    row.cells[4].before(copy);
});

//# sourceMappingURL=index.f75de5e1.js.map
