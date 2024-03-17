import { useState } from "react";

export function useIsColliding (element1Ref, element2Ref) {
    const [isColliding, setIsColliding] = useState(false);
   // Use timemout to get the right width
   setTimeout(() => {
    const element1 = element1Ref.current;
    const element2 = element2Ref.current;
    if (element1 && element2) {
        const element1Rect = element1.getBoundingClientRect();
        const element2Rect = element2.getBoundingClientRect();

        if(element1Rect.width >= element2Rect.x) {
            setIsColliding(true);
        } else {
            setIsColliding(false);
        }
    }
    }, 10);
  
    return isColliding;
}

export default useIsColliding;