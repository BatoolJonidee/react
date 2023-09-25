import { useRouteError } from "react-router-dom";
import image from "../notfound.png"; 

export default function Error() {
    const mystyle={
        backgroundImage:`url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height:'900px'
      }
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={mystyle}>
      
    </div>
  );
}