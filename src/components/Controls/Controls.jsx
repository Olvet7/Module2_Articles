import css from "../Controls/Controls.module.css"

export default function Controls({ first, last, onPrev, onNext }) {
  return (
    <div className={css.btn}>
      <button disabled={first} onClick={onPrev}>
        Prev
      </button>
      <button disabled={last} onClick={onNext}>
        Next
      </button>
    </div>
  );
}
