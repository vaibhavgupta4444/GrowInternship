export interface Artwork {
  id: string;
  title: string;
  place_of_origin: string | null;
  artist_display: string | null;
  inscriptions: string | null;
  date_start: number | null;
  date_end: number | null;
}

export interface Pagination {
  limit: number;
  total: number;
}

export async function fetchArtworks(url: string): Promise<{ artworks: Artwork[], pagination: Pagination } | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const json = await response.json();

    const artworks: Artwork[] = json.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      place_of_origin: item.place_of_origin,
      artist_display: item.artist_display,
      inscriptions: item.inscriptions,
      date_start: item.date_start,
      date_end: item.date_end
    }));

    const pagination: Pagination = {
      limit: json.pagination?.limit || 12,
      total: json.pagination?.total || 12
    };

    return { artworks, pagination };

  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}