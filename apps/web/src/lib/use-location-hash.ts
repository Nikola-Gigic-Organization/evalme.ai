"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const useLocationHash = () => {
  const params = useParams();

  const [hash, setHash] = useState<string | undefined>();

  useEffect(() => {
    if (window && window.location.hash) {
      const hashFromUrl = window.location.hash;
      setHash(hashFromUrl);
    } else {
      setHash(undefined);
    }
  }, [params]);

  return hash;
};

export default useLocationHash;
