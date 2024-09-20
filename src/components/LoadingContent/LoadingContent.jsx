const LoadingContent = ({ isLoading, loadingText = "loading data..." }) => {
  if (isLoading) {
    return (
      <div className="loading-content">
        <p>{loadingText}</p>
      </div>
    );
  }

  return props.children;
};

export default LoadingContent;
