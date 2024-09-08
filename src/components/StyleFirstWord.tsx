import { RichTextField, RTNode } from "@prismicio/client";

// Helper function to split and style text
const splitAndStyleText = (text: string) => {
  const words = text.split(' ');

  if (words.length === 0) return text;

  const firstWord = words[0];
  const remainingText = words.slice(1).join(' ');

  return (
    <>
      <span className="text-[#62c4c8]">{firstWord}</span>{' '}{remainingText}
    </>
  );
};

// Type for props
type StyledTextProps = {
  field: RichTextField;
};

// Custom component for rendering styled rich text
const CustomRichText = ({ field }: StyledTextProps) => {
  const renderNode = (node: RTNode, index: number) => {
    if (node.type === 'paragraph' || node.type === 'heading2') {
      // Handle text nodes
      return (
        <p key={index}>
          {splitAndStyleText(node.text || '')}
        </p>
      );
    }
    // Handle other node types if necessary
    return null;
  };

  return (
    <>
      {field.map((node, index) => renderNode(node, index))}
    </>
  );
};

export default CustomRichText;
