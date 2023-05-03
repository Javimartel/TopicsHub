const CardAbout = (props) => {
  return (
    <div className="card lg:card-side bg-blue-500 text-black hover:text-white shadow-xl m-5 min-w-[25%]">
      <div className="min-w-[30%] max-w-[30%] min-h-[20vh] max-h-full">
        <img className="h-full min-w-full object-cover" src={props.img} alt={props.name} />
      </div>
      <div className="card-body flex items-center">
        <h2 className="card-title">{props.name}</h2>
        <p className="text-last-center">{props.description}</p>
        <p>{props.category}</p>
      </div>
    </div>
  );
}

export default CardAbout;
