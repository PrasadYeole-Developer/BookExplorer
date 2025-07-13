"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filters = ({ year, setYear }) => {
  return (
    <div className="flex gap-2 mt-6">
      <Select value={year} onValueChange={setYear}>
        <SelectTrigger>
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {[
            { label: "All", value: "all" },
            { label: "1500-1599", value: "1500-1599" },
            { label: "1600-1699", value: "1600-1699" },
            { label: "1700-1799", value: "1700-1799" },
            { label: "1800-1899", value: "1800-1899" },
            { label: "1900-1999", value: "1900-1999" },
            { label: "2000-2025", value: "2000-2025" },
          ].map((range) => (
            <SelectItem key={range.value} value={range.value}>
              {range.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
