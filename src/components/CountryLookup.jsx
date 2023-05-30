"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const res = await fetch("https://geolocation-db.com/json/");
      const data = await res.json();
      setCountry(data.country_name);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <img src="/spinner.svg" className="h-6 w-6" alt="loading" />
      ) : (
        country
      )}
    </div>
  );
}
