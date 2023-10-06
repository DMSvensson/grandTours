import { useEffect, useState } from "react";

function useHasPassedDetection(element1Ref, element2Ref) {
    const [isColliding, setIsColliding] = useState(false);
  
    useEffect(() => {
        const handleCollision = () => {
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
          
        };

        window.addEventListener('wheel', handleCollision);
    
        return () => {
          // Clean up the event listener
          window.removeEventListener('wheel', handleCollision);
        };
      }, [element1Ref, element2Ref]);
  
    return isColliding;
}

export default useHasPassedDetection;