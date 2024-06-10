export default function Input(props:any) {
  const { type, placeholder,name} = props;
  return (
    <input type={type} name={name} id={name} placeholder={placeholder} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
  )
}