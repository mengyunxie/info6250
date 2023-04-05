import spinner from './images/loading.gif';

function Loading({ className, children='Loading...' }) {
  return (
    <div className={`spinner ${className}`}>
      <img className="spinner-img" alt="loading" src={spinner} />
      <p>{children}</p>
    </div>
  );
}

export default Loading;
