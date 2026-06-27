const Weather = ({ data, title }) => {
  return (
    <div className="bg-white/10 rounded-lg w-50 h-20 flex flex-col justify-center items-center gap-2">
      <div>{title}</div>
      <div className="text-2xl">{data}</div>
    </div>
  );
};

export default Weather;
