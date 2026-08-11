import confetti from "canvas-confetti";

export function celebrate() {
  const colors = ["#f59e42", "#fbdb52", "#6c8cf5", "#a86cf5", "#5fd8c4", "#7ede9a"];
  confetti({ particleCount: 90, spread: 70, origin: { y: 0.7 }, colors, scalar: 1.1 });
  setTimeout(
    () => confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0, y: 0.8 }, colors }),
    150,
  );
  setTimeout(
    () => confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1, y: 0.8 }, colors }),
    250,
  );
}
