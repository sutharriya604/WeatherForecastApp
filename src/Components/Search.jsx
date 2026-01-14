const Search = ({ result }) => {
  const handleChange = async (e) => {
    const city = e.target.value;
    
    
    try{
   const url=`https://weatherapi-harsh.vercel.app/weather?city=${city}`;    
   
   const response = await fetch(url);
    const data = await response.json();
     
        // console.log(data)
     result(data)
    
    }
    catch(err){
      console.log(err)
    }  

  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input 
  
        onChange={handleChange}
        style={{
          width: "50%",
          height: "45px",
          margin:"0px",
          fontSize: "18px",
          paddingLeft: "15px", 
          border:"1px solid #5a5a5ab2",
          background: "#ffffff38",
          outline: "none",
          borderRadius: "50px",
          
        }}
        type="text"

      />
    </div>
  );
};

export default Search;
