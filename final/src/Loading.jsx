function Loading({ className, children='Loading...' }) {
  return (
    <div className={`loading ${className}`} >
      <i className='gg-spinner-two'></i>
      <p className='loading-message'>{children}</p>
    </div>
  );
}

export default Loading;