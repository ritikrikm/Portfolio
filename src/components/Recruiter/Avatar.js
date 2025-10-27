const Avatar= ({ src, alt, size = 48 }) => {
  const sizeStyle = { width: size, height: size, minWidth: size, minHeight: size };
  const initials = alt.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);

  return (
    <div
      className="avatar-container"
      style={sizeStyle}
    >
      <img
        src={src}
        alt={alt}
        className="avatar-image"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentNode.textContent = initials;
        }}
      />
    </div>
  );
};
export default Avatar;