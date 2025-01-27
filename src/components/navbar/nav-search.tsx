"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Input } from "../ui/input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { SEARCH } from "@/utils/constants/query-param-key";
import { useDebouncedCallback } from "use-debounce";

function NavSearch() {
  const qParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [search, setSearch] = useState(qParams.get(SEARCH)?.toString() || "");

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(qParams);
    if (value) {
      params.set(SEARCH, value);
    } else {
      params.delete(SEARCH);
    }
    replace(`${pathname}?${params}`);
  }, 500);

  const searchParam = useMemo(() => qParams.get(SEARCH), [qParams.get(SEARCH)]);

  useEffect(() => {
    if (!searchParam) {
      setSearch("");
    }
  }, [searchParam]);

  return (
    <Input
      type="text"
      placeholder="find a property..."
      className="max-w-sm dark:bg-muted"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
}

export default NavSearch;
