const Movie = (props: any) => {
  return (
    <>
      <li key={props.id}>
        {props.title} - {props.rating}
      </li>
    </>
  );
};
export default Movie;
