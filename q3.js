function calculateDateTimeDifference(firstDateTime, secondDateTime) {
    const firstDate = new Date(firstDateTime);
    const secondDate = new Date(secondDateTime);

    const timeDifference = Math.abs(firstDate - secondDate);

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const differenceDateTime = `${days} days | ${hours} hours | ${minutes} minutes | ${seconds} seconds`;
    return differenceDateTime;
}

const firstDateTime = "12/01/2022 14:00:00";
const secondDateTime = "12/01/2021 08:00:00";

const differenceDateTime = calculateDateTimeDifference(firstDateTime, secondDateTime);
console.log(differenceDateTime);
