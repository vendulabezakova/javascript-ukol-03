//https://moje.czechitas.cz/cs/udalosti/prehled/2072-javascript-1/domaci-ukol/592

const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('.').map(Number)
    return { day, month, year }
  };

  const enterDate = prompt("Enter the date in format DD.MM.YYYY:")
  const parsedDate = parseDate(enterDate)
  
  document.body.innerHTML += `
  <p style="font-size:32px">Day: ${parsedDate.day}, month: ${parsedDate.month}, year: ${parsedDate.year}</p>
  `