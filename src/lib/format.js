import Table from "cli-table";
import { format } from "date-fns";

export function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}

export function getByDayFormat(data = {}) {
  const table = new Table({
    colWidths: [32, 32]
  });

  Object.keys(data).forEach(key => {
    const name = key === "asrHanafi" ? "Asr (Hanafi)" : titleCase(key);
    const value =
      key === "date" ? format(data[key], "EEE MMM dd, yyyy") : data[key];

    table.push([name, value]);
  });

  return table.toString();
}
