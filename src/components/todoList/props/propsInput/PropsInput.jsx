export const Input = ({
  onChange,
  className,
  placholder,
  type,
  value,
  divStyles,
}) => {
  return (
    <div>
      <input
        onChange={onChange}
        className={className}
        placeholder={placholder}
        type={type}
        value={value}
      />
    </div>
  );
};
