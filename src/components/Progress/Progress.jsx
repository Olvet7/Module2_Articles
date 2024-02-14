export default function Progress({current, total}) {
  return (
    <p>
      {current + 1}/{total}
    </p>
  );
}
