import React, { useState, useEffect, useMemo } from "react";

interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData<T>(url: string): [T[] | null, boolean] {
  const [data, setData] = useState<null | T[]>(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data: T[]) => {
        setData(data);
        setDone(true);
      });
  }, [url]);

  return [data, done];
}

function CustomHookComponent() {
  const [data, done] = useFetchData<Beverage>("/hv-taplist.json");
  const portlandTabs = useMemo<Beverage[]>(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes("Portland")),
    [data]
  );

  const portlandBeverage = done
    ? portlandTabs.map((item) => (
        <img key={item.beverageName} src={item.logo} alt='Beverage logo' />
      ))
    : null;

  const allBeverage = done
    ? data!.map((item) => (
        <img key={item.beverageName} src={item.logo} alt='Beverage logo' />
      ))
    : null;

  return (
    <div>
      <div>
        <h1>All beverage</h1>
        <div>{allBeverage}</div>
      </div>
      <div>
        <h1>Portland bevarage</h1>
        <div>{portlandBeverage}</div>
      </div>
    </div>
  );
}

export default CustomHookComponent;
