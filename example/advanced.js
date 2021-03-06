﻿$(document).ready(function () {
    var table = $('#myAdvancedTable').DataTable();
    table.MakeCellsEditable({
        "onUpdate": myCallbackFunction,
        "inputCss":'my-input-class',
        "columns": [0,1,2],
        "allowNulls": {
            "columns": [3],
            "errorClass": 'error'
        },
        "confirmationButton": { // could also be true
            "confirmCss": 'my-confirm-class',
            "cancelCss": 'my-cancel-class'
        },
        "inputTypes": [
            {
                "column": 0,
                "type": "text",
                "options": null
            },
            {
                "column":1, 
                "type": "list",
                "options":[
                    { "value": "1", "display": "Beaty" },
                    { "value": "2", "display": "Doe" },
                    { "value": "3", "display": "Dirt" }
                ]
            }
            // Nothing specified for column 2 so it will default to text
        ]
    });

});

function myCallbackFunction (updatedCell, updatedRow, oldValue) {
    console.log("The new value for the cell is: " + updatedCell.data());
    console.log("The old value for that cell was: " + oldValue);
    console.log("The values for each cell in that row are: " + updatedRow.data());
}