export {};

declare global {
  interface Window {
    mappls?: {
      Map: new (
        container: string,
        options: {
          center: [number, number];
          zoom: number;
          zoomControl?: boolean;
          location?: boolean;
        }
      ) => {
        on: (event: string, callback: () => void) => void;
      };
      Marker: new (options: {
        map: object;
        position: { lat: number; lng: number };
        popup_html?: string;
        draggable?: boolean;
      }) => void;
    };
  }
}
