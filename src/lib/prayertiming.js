import { getByDay, getByMonth } from 'prayertiming';

export default function prayertiming(config = {}) {
  const date = config.date ? new Date(config.date) : new Date();
  const params = {
    long: config.long,
    lat: config.lat,
    method: config.method,
    timeFormat: config.timeFormat,
  };

  let timing;

  if (config.type === 'monthly') {
    params.month = date.getMonth();
    params.year = date.getFullYear();

    timing = getByMonth({
      ...params,
    });
  } else {
    params.date = date;
    timing = getByDay({ ...params });
  }

  return timing;
}
