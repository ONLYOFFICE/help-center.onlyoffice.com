import { buildLargeTables, buildNewstrTable, buildMobileLargeTables, buildTableOfTranslators, dateOfTable } from "@utils/helpers/TableBuilder/language_table.js";

export function BuildTable(pageTopDivID, cookies, jsonData){
    const sortTableByFirstColumn = (tableId) => {
        const table = document.getElementById(tableId);
        const rows = Array.from(table.rows).slice(1);
        rows.sort((rowA, rowB) => rowA.cells[0].innerText.localeCompare(rowB.cells[0].innerText));
        rows.forEach(row => table.appendChild(row));
    };

    const commonActions = (id, jsonData) => {
        if (id !== "languagesTable") {
            buildNewstrTable(cookies, jsonData);
            sortTableByFirstColumn('newstrList');
        }
        if (id !== "languagesiOSDocumentsTable" && id !== "languagesiOSProjectsTable") {
            buildLargeTables(id, jsonData);
            sortTableByFirstColumn(id);
        } else {
            buildMobileLargeTables(pageTopDivID, jsonData);
            sortTableByFirstColumn(pageTopDivID);
        }
        document.getElementById('lastUpdate').innerHTML = `${dateOfTable}`;
    };
    
    switch (pageTopDivID) {
        case 'languagesTable':
            buildTableOfTranslators(jsonData);
            commonActions(pageTopDivID, jsonData);
            break;
        case 'languagesEditorsTable':
        case 'languagesCommunityTable':
        case 'languagesAndroidTable':
        case 'languagesDesktopEditorsTable':
        case 'languagesiOSDocumentsTable':
        case 'languagesiOSProjectsTable':
            commonActions(pageTopDivID, jsonData);
            break;
    }
}