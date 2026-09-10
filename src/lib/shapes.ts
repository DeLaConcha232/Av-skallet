/** Small geometric markers used as decorative bullets in Services and TechStandards.
 * Indexed with `i % shapeClass.length` so any item count cycles through them. */
export const shapeClass = [
  "rounded-none", // square
  "rounded-full", // circle
  "rounded-none rotate-45", // diamond
  "rounded-none [clip-path:polygon(50%_0%,0%_100%,100%_100%)]", // triangle
  "rounded-full [clip-path:polygon(0%_0%,100%_0%,100%_100%)]", // half-circle
];
