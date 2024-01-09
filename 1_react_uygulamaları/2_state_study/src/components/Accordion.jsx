import { useState } from 'react';

const Accordion = (prop) => {
  // accodion'un alt kısmı gözükücek mi? state'i
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="acc">
      <div>
        <h2>{prop.title}</h2>
        {/*
         Burdaki koşul alanında her zaman state'deki boolean
         değeri tersine çevirmek istiyoruz bunun için 2 yol
         izleyebiliriz:
         1: isOpen === false ? true : false
         2: !isOpen
        */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'X' : '+'}
        </button>
      </div>

      {/*
       * isOpen koşuluna bağlı oalrak p etiketini ekran bas
       * altarnatif: className'ine koşul vererek benzer sonuç elde edbiliriz
       */}
      {/* {isOpen === true && (
        <p>
          Bu projeyi geliştiriken Javascript React ve SCSS kullanıldı.
          Bu projeyi geliştiriken Javascript React ve SCSS kullanıldı.
          Bu projeyi geliştiriken Javascript React ve SCSS kullanıldı.
          Bu projeyi geliştiriken Javascript React ve SCSS kullanıldı.
        </p>
      )} */}

      <p className={isOpen === true && 'active'}>{prop.text}</p>
    </div>
  );
};

export default Accordion;
