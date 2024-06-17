import Label from "@/app/admin/components/Elements/Input/Label";
import Input from "@/app/admin/components/Elements/Input/Input";
import Textarea from "@/app/admin/components/Elements/Input/Textarea";

export default function InputDes(props:any) {
const {label,name,type,placeholder,divWidth,tipe,value} = props;
  return (
    <div className={`w-full px-3 ${divWidth}`}>

      <Label htmlFor={name}>{label}</Label>
      {
        tipe === 'text' && 
        <Input name={name} type={type} value={value} placeholder={placeholder}/>  
      }
      {
        tipe === 'textarea' && 
        <Textarea name={name} placeholder={placeholder} value={value}/>  
      }
      
    </div>

  );
};