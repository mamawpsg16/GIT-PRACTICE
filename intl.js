let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
date = new Date("2/1/22"); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// Legacy method; always interprets two-digit year values as relative to 1900
date.setYear(98);
// console.log(date.toString(), '1'); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setYear(22);
// console.log(date.toString(),'2'); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

date.setFullYear(98);
// console.log(date.getFullYear(),'3'); // 98 (not 1998)
date.setFullYear(22);
// console.log(date.getFullYear(),'4');// 22 (not 1922, not 2022)

// console.log(Math.floor(Date.now() / 1000)); //Get the number of seconds since the ECMAScript Epoch

const options1 = {
    // weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  
  const date1 = new Date('2024-05-22 11:24:16');

  const readableDateOptions = {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
  };

  const numericDateOptions = {
      month: 'numeric',
      day: '2-digit',
      year: 'numeric',
  };
  
  const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
  };
  
  const formattedDate = new Intl.DateTimeFormat('en-US', numericDateOptions).format(date1);
  const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date1);
  
  const customFormattedDateTime = `${formattedDate} ${formattedTime}`;
  console.log(customFormattedDateTime); // Output: May 22, 2024 11:24:16 AM
  