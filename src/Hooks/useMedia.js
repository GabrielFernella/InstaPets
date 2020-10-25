/* Esse Hook serve para identificar o resize da tela, assim podemos identificar se a
tela é adequada para sofrer alteração como uma tela mobile */
import React from 'react';

const useMedia = media => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;

/*
  Exemplo de Uso:
  const mobile = useMedia('(max-width: 40rem)');
*/
