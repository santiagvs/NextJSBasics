function formatDate(date: string): string {
  const parts = date.split('-');
  if (parts.length === 3) {
    const [day, month, year] = parts;
    return `${year}-${month}-${day}`;
  } else {
    return date;
  }
}

// Example usage
const formattedDate = formatDate('12-31-2022');
console.log(formattedDate);
