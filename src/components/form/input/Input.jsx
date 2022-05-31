import { useController } from "react-hook-form";

const Input = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div>
      <input
        className="p-4 w-full border border-gray-100 rounded bg-white outline-none transition-all focus:border-blue-500"
        placeholder="Enter your password"
        {...field}
        {...props}
      />
    </div>
  );
};

export default Input;
