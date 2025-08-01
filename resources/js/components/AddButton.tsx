import { Button } from "@/components/ui/button";
import { LuPlus } from "react-icons/lu";
const AddButton = () => {

    const showAlert = () => {
        alert("Add new recipe");
    }

  return (
    <Button variant="primary" className="absolute bottom-5 right-5 rounded-full" onClick={showAlert}>
        <LuPlus className="size-6" />
    </Button>
  )
}

export default AddButton