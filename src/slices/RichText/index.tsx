import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";
import styles from "./index.module.css";
import { Arima, Amaranth } from 'next/font/google';

const arima = Arima({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arima',
})

const amaranth = Amaranth({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-amaranth'
})

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <section className={arima.className}>
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  );
};

export default RichText;
