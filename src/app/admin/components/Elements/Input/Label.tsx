export default function Label(props:any) {
  const { htmlFor,children }= props;
  return (
    <label htmlFor={htmlFor} className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
      {children}
    </label>
  )
}