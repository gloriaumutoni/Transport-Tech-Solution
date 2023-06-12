import './BookingCard.css'

let Card =()=>{
    return(
        <div className="container">
            <div className='sub-container'>
        <div className="card-design">
        <div className='input1'>
         
        <label>
          <h1>From:</h1>
          <select
            // value={from}
            // onChange={(e) => setFrom(e.target.value)}
            id="input-form1">

            <option id="design" value="">Select</option>
            <option id="design" value="Kanombe">Kanombe</option>
            <option id="design" value="Kimirinko">Kimirinko</option>
            <option id="design" value="Kicukiro">Kicukiro</option>
            <option id="design" value="Downtown">Downtown</option>
            <option id="design" value="Nyamirambo">Nyamirambo</option>
          </select>
        </label>
       

        </div>
         
        </div>
        </div>
         </div>
    );
}
export default Card;