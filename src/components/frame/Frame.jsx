const Frame = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/KE3y8w_RUrg?auto_play=1"
        title="YouTube video player"
        className="rounded-md"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
};

export default Frame;
