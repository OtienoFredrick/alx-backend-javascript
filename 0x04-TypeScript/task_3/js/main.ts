import { RowID, RowElement } from './interface';
import CRUD from './crud';

const row: RowElement = {
	firstName: "Guillaume";
	lastName: "Salva";
}

const newRowID: RowID = insertRow(row);
row.age = 23

const updatedRow: RowElement = row

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newROWID);
