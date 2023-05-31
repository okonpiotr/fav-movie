import { SelectItem } from "primeng/api";

export function enumToArray(enumeration: any): SelectItem[]  {
  return Object.entries(enumeration).map(([key, value]) => ({ label: key, value }));
}
