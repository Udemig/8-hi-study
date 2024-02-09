import { useRef } from 'react';

const RefExample = () => {
  // useRef değişken olarak bir jsx elemanını depolyabileceğimiz veri döndürür
  const inputRef = useRef();
  const buttonRef = useRef();

  // butona tıklanınca çalışır
  const handleFocus = () => {
    console.log(inputRef.current.value);

    inputRef.current.focus();
  };

  return (
    <div className="d-flex flex-column gap-5 p-5">
      <input ref={inputRef} className="form-control" type="text" />
      <button
        ref={buttonRef}
        onClick={handleFocus}
        className="btn btn-warning"
      >
        Odaklan
      </button>
    </div>
  );
};

export default RefExample;
