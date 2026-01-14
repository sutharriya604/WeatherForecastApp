const Day = ({ day, put }) => {
  const desc = {
    "clear sky": "☀️",
    "few clouds": "🌤️",
    "scattered clouds": "☁️",
    "broken clouds": "☁️",
    "light rain": "🌦️",
    rain: "🌧️",
    thunderstorm: "⛈️",
    snow: "☃️",
    mist: "😶‍🌫️",
  };

  const set = () => {
    put(day);
  };
  return (
    <button style={{ fontSize: "20px" }} onClick={set}>
      <span style={{ height: "50px", width: "50px", fontSize: "40px" }}>
        {desc[day.description] || (
          <img
            src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
            alt={""}
            style={{width:"70px", height:"70px"}}
          />
        )}
      </span>
      <br />
      <span class="degree">{day.max_temp}°</span>
      <br />
      {day.day_sort}
    </button>
  );
};

export default Day;
