import { buildLargeTables, buildNewstrTable, buildMobileLargeTables, buildTableOfTranslators, dateOfTable } from "@utils/helpers/TableBuilder/language_table.js";

export function BuildTable(pageTopDivID, cookies){
    const sortTableByFirstColumn = (tableId) => {
        const table = document.getElementById(tableId);
        const rows = Array.from(table.rows).slice(1);
        rows.sort((rowA, rowB) => rowA.cells[0].innerText.localeCompare(rowB.cells[0].innerText));
        rows.forEach(row => table.appendChild(row));
    };

    const commonActions = (id) => {
        if (id != "languagesTable") {
            buildNewstrTable(cookies);
            sortTableByFirstColumn('newstrList');
        }
        if (id !== "languagesiOSDocumentsTable" && id !== "languagesiOSProjectsTable") {
            buildLargeTables(id);
            sortTableByFirstColumn(id);
        } else {
            buildMobileLargeTables(pageTopDivID);
            sortTableByFirstColumn(pageTopDivID);
        }
        document.getElementById('lastUpdate').innerHTML = `${dateOfTable}`;
    };
    
    switch (pageTopDivID) {
        case 'languagesTable':
            buildTableOfTranslators();
            commonActions(pageTopDivID);
            break;
        case 'languagesEditorsTable':
        case 'languagesCommunityTable':
        case 'languagesAndroidTable':
        case 'languagesDesktopEditorsTable':
        case 'languagesiOSDocumentsTable':
        case 'languagesiOSProjectsTable':
            commonActions(pageTopDivID);
            break;
    }
}