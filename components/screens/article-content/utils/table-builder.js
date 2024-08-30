import { BuildTable } from "@utils/helpers/TableBuilder/language_table_builder";

const tableBuilder = (container, cookies) => {
    const mainBuscallContainer = container.querySelector(".main_buscall_container");

      if (mainBuscallContainer) {
        const languagesListTables = mainBuscallContainer.querySelectorAll(".languages_list_table");
        const foundTable = Array.from(languagesListTables).find(table => table.id.startsWith("languages"));

        if (foundTable) {
          const tableId = foundTable.id;
          BuildTable(tableId, cookies);
        }
      }
}
export { tableBuilder };