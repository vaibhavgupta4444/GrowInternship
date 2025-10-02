import { useEffect, useRef, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import type { PaginatorPageChangeEvent } from 'primereact/paginator';
import { Paginator } from 'primereact/paginator';
import { fetchArtworks, type Artwork } from './api/apiClient';
import { OverlayPanel } from 'primereact/overlaypanel';


function HomePage() {

  const [artWorks, setArtWorks] = useState<Artwork[]>([]);
  const [selectedRows, setSelectedRows] = useState<Artwork[]>([]);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(12);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const checkboxOverlayRef = useRef<OverlayPanel>(null);
  const [rowsToSelect, setRowsToSelect] = useState<string>('0');


  const fetchData = async (page = 1) => {
    try {
      const response = await fetchArtworks(`https://api.artic.edu/api/v1/artworks?page=${page}`);
      if (response) {
        setArtWorks(response.artworks);
        setTotalRecords(response.pagination.total);
      }
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

useEffect(() => {
  const remainingToSelect = parseInt(rowsToSelect) - selectedRows.length;
  if (remainingToSelect > 0 && artWorks.length > 0) {
    const newSelectableRows = artWorks.filter(
      (row) => !selectedRows.some((sr) => sr.id === row.id)
    );
    const rowsToAdd = newSelectableRows.slice(0, remainingToSelect);

    if (rowsToAdd.length > 0) {
      setSelectedRows((prev) => [...prev, ...rowsToAdd]);
    }
  }
}, [rowsToSelect, artWorks]);



  useEffect(() => {
    const page = Math.floor(first / rows) + 1;
    fetchData(page);
  }, [first, rows]);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
  };

  const selectionHeader = (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="flex items-center justify-center w-7 h-7 rounded-lg hover:bg-blue-50 transition-all group"
        onClick={e => checkboxOverlayRef.current?.toggle(e)}
        title="Select Rows..."
      >
        <i className="pi pi-chevron-down text-sm text-gray-500 group-hover:text-blue-600 transition-colors" />
      </button>

      <OverlayPanel ref={checkboxOverlayRef} className="mt-1">
        <div className="p-4 min-w-[240px] bg-white shadow-xl rounded-lg border border-gray-200">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Select Number of Rows
          </label>
          <input
            type="number"
            value={rowsToSelect}
            onChange={e => setRowsToSelect(e.target.value)}
            placeholder="Enter number..."
            min="0"
            max={totalRecords}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3 text-sm"
          />
          <button
            className="w-full px-4 py-2.5 text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow"
            onClick={() => {
              const num = parseInt(rowsToSelect);
              if (num && num > 0) {
                setSelectedRows([]);

                // Start from first page
                if (first !== 0) {
                  setFirst(0);
                } else {
                  // Trigger selection on current page
                  setArtWorks(prev => [...prev]);
                }

                checkboxOverlayRef.current?.hide();
              }
            }}
            disabled={!rowsToSelect || parseInt(rowsToSelect) <= 0}
          >
            Select {rowsToSelect || '0'} Row{rowsToSelect && parseInt(rowsToSelect) !== 1 ? 's' : ''}
          </button>
        </div>
      </OverlayPanel>
    </div>
  );


  return (
    <div>
      <div className="card">
        <DataTable
          value={artWorks}
          selectionMode="multiple"
          selection={selectedRows}
          onSelectionChange={(e) => setSelectedRows(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: "60rem" }}
          rows={rows}
        >
          <Column selectionMode="multiple" header={selectionHeader} headerStyle={{ width: "3rem" }} />
          <Column field="id" header="ID" />
          <Column field="title" header="Title" sortable />
          <Column field="place_of_origin" header="Place of Origin" sortable />
          <Column field="artist_display" header="Artist Display" />
          <Column field="date_start" header="Date Start" sortable/>
          <Column field="date_end" header="Date End" sortable />
        </DataTable>
      </div>
      <div>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={totalRecords}
          onPageChange={onPageChange}
        />
      </div>
    </div>

  )
}
export default HomePage;