function Currenttime(){
  let time = new Date();
  return <div>
   <p className="lead">
    This is the current time: {time.toLocaleDateString()}
   </p>

  </div>
}

export default Currenttime;