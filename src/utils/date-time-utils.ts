import { format } from "date-fns";
import {getConfigValue} from "./config-utils.ts";

const DEFAULT_DATE_FORMAT = "yyyy-MM-dd HH:mm:ss zzz";
const dateFormat = getConfigValue<string>("format.date", DEFAULT_DATE_FORMAT);

export const formatDate = (date: Date) => format(date, dateFormat);