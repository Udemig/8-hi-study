import { useState, useCallback } from 'react';
import Button from './Button';

const NewExample = () => {
  const [text, setText] = useState();
  const [count, setCount] = useState(0);

  /*
   * Bu bileşn her render edildiğinde updateCount fonnksiyonu
   * yeniden oluşturulur ve bellekte farklı bir alanda tutulur
   * ve bu fonksiyonu prop olarak gönderdiğimizde ise referanslar 
   * farklı olucağından memo görevini yapamaz.
   
   * bileşen her render edilidğinde fonksiyonu yeniden oluşturmak yerine
   * daha önce oluşturlan ve bellekte tutlan fonksiyonu çağırırsak
   * o zaman bu sorunu yaşamayız.
   
   * useCallback fonksiyonları cache'e gönderip gerektiğinde
   * tekrardan çağırıp gereksiz yeni fonksiyonlar oluşturmanın önüne geçer
   */
  const updateCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Button count={count} updateCount={updateCount} />

      <button onClick={updateCount}>Üst Bileşendeki button</button>
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <h1>{text}</h1>
    </div>
  );
};

export default NewExample;
