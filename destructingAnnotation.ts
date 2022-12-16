const feather = {
  date: Date,
  wheather: "sunny",
};

const wheather = ({ date, wheather }: { date: Date; wheather: string }) => {
  console.log(date);
  console.log(wheather);
};
