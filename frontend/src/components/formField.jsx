import "../App.css";

function FormField({ data, handleSubmit, dataselect }) {
  return (
    <div className="form">
      {data.map((value, index) => {
        if (value.type === "select") {
          return (
            <select key={index} value={value.value} onChange={(e) => value.setValue(e.target.value)} required>
              <option value="" disabled hidden>
                {value.placeholder}
              </option>
              {dataselect.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.nama}
                  </option>
                );
              })}
            </select>
          );
        } else {
          return <input key={index} value={value.value} type={value.type} placeholder={value.placeholder} onChange={(e) => value.setValue(e.target.value)} required />;
        }
      })}
      <button type="submit" onClick={() => handleSubmit()}>
        SUBMIT
      </button>
    </div>
  );
}

export default FormField;
