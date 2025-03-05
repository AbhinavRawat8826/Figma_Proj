import { toast } from "react-hot-toast"; 

const useToast = () => {
  const showToast = (message, type = "success") => {
    if (type === "success") {
      toast.success(message); 
    } else if (type === "error") {
      toast.error(message); 
    } else {
      toast(message); 
    }
  };

  return { showToast };
};

export default useToast;
