export default function Paragraph({ children, fontSize, color, style}) {
  return <p className={`font-body ${color ? color : "text-black-500"} ${fontSize} ${style}`}>{children}</p>
}