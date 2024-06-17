export default function Input(props:any) {
  const { placeholder,name,value} = props;
  return (
    <textarea name={name} placeholder={placeholder} className="appearance-none block w-full bg-gray-200 
    text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white 
    focus:border-gray-500 text-xs">
      {value}
    </textarea>
    
  )
}