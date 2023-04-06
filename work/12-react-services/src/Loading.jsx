import Spinner from './Spinner';

function Loading({ className, size, children='Loading...' }) {
  return (
    <div className={`loading ${className}`} >
      <Spinner size={size} />
      <p className='loading-message'>{children}</p>
    </div>
  );
}

export default Loading;