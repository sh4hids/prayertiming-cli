import { getByDay, getByMonth } from "prayertiming";

export default function prayertiming(config = {}) {
  const date = new Date();
  const params = {
    long: config.long,
    lat: config.lat,
    method: config.method,
    timeFormat: config.timeFormat
  };
  let timing;

  if (config.type === "monthly") {
    params.month = config.month || date.getMonth();
    params.year = config.year || date.getFullYear();

    timing = getByMonth({
      ...params
    });
  } else {
    params.date = config.date || date;
    timing = getByDay({ ...params });
  }

  return timing;
}
