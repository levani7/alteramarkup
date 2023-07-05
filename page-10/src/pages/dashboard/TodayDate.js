import React from 'react';

function TodayDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Note: month index starts from 0
  const year = currentDate.getFullYear();

  return (
    <div>
        {day}/{month}/{year}
    </div>
  );
}

export default TodayDate;