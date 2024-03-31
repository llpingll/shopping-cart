export const getLast30Days = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const thirtyDaysAgo = today;
  thirtyDaysAgo.setDate(today.getDate() - 30);
  const year30 = thirtyDaysAgo.getFullYear();
  const month30 = String(thirtyDaysAgo.getMonth() + 1).padStart(2, "0");
  const day30 = String(thirtyDaysAgo.getDate()).padStart(2, "0");

  return `${year30}-${month30}-${day30},${year}-${month}-${day}`;
};
