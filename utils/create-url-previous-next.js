module.exports = function createUrlPreviousAndNext(
  limit,
  countPages,
  page,
  req
) {
  let url = req.protocol + "://" + req.get("host") + req.baseUrl;
  countPages = countPages > limit ? Math.ceil(countPages / limit - 1) : 0;
  let previous = page > 0 ? url + "?page=" + (page - 1) : null;
  previous = page - 1 > countPages ? url + "?page=" + countPages : previous;
  let next = page < countPages ? url + "?page=" + (page + 1) : null;
  previous =
    previous != null ? new URL(previous, url).href : "No previous page";
  next = next != null ? new URL(next, url).href : "No next page";
  return { previousPage: previous, nextPage: next };
};
