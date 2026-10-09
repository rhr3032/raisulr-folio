// URL-friendly slug used for project, service and blog routes
// (must match the mock API lookups in _mockApis/*).
export const slugify = (title?: string) => {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
