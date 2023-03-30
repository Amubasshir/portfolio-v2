const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <h1
        className={`inline-block w-full text-black font-bold text-8xl  ${className}`}
      >
        {text.split(' ').map((word, index) => {
          return (
            <span key={index} className="inline-block">
              {word}&nbsp;
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default AnimatedText;
