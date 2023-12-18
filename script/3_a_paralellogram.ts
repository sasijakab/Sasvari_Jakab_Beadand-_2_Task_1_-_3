function calculateAreaWithHeightAndSide(height: number, side: number): number {
    return height * side;
  }
  
  function calculateAreaWithAngleAndSides(angle: number, side1: number, side2: number): number {
    const radians = (angle * Math.PI) / 180; // Convert angle to radians
    return side1 * side2 * Math.sin(radians);
  }
  
//
  