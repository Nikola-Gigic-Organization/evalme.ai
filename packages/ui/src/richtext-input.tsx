import { forwardRef } from "react";

interface RichTextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextInput = (props: RichTextInputProps) => {
  const { value, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return <textarea value={value} onChange={handleChange} />;
};

export default forwardRef(RichTextInput);
