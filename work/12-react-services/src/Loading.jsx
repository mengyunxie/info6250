import Spinner from './Spinner';

function Loading({ children='Loading...' }) {
  return (
    <div className="loading" >
      <Spinner />
      <p>{children}</p>
    </div>
  );
}

export default Loading;