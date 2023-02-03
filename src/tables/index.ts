import englishCodeset from "./0037"
import germanCodeset from "./0273"
import finsweCodeset from "./0278"

export interface IConvTableEntry {
  hex: string
  ebcdic: string
  ascii: string
}

export type ConvTableName = "0037" | "0273" | "0278"

export const convTables: Record<ConvTableName, IConvTableEntry[]> = {
  "0037": englishCodeset,
  "0273": germanCodeset,
  "0278": finsweCodeset,
}